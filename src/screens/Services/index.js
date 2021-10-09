import React, { useEffect, useState } from 'react'

import { FlatList } from 'react-native'
import Item from './Item'
import { api } from '../../services/api'

export default function Services() {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getServices() {
        setIsLoading(true)
        try {
            const { data } = await api.get('/products')

            setServices(data.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <>
            <FlatList
                data={services}
                onRefresh={getServices}
                refreshing={isLoading}
                removeClippedSubviews={false}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </>
    )
}

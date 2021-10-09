import React, { useEffect, useState } from 'react'

import { FlatList } from 'react-native'
import Item from './Item'
import CartState from '../../components/CartState'
import { api } from '../../services/api'


export default function Cart() {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getServices() {
        setIsLoading(true)
        try {
            const {
                data: { data }
            } = await api.get('/cart/user/2')

            setServices(data.products)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getServices()
    }, [])

    const total = services.reduce(
        (sum, { price, CartProducts: { quantity } }) =>
            sum + parseFloat(price) * quantity,
        0
    )

    return (
        <>
            <CartState total={total} />
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

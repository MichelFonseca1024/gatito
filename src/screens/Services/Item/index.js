import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Button from '../../../components/Button'
import IntInput from '../../../components/IntInput'
import { api } from '../../../services/api'
import style from './style'

export default function Item({ id, title, price, description }) {
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(price)
    const [expand, setExpand] = useState(false)

    const updateTotalQuantity = (newQuantity) => {
        setQuantity(newQuantity)
        computedTotal(newQuantity)
    }

    const computedTotal = (newQuantity) => {
        setTotal(newQuantity * price)
    }

    const invertExpand = () => {
        setExpand(!expand)
        updateTotalQuantity(1)
    }

    const addToCart = async (productId, quantity) => {
        try {
            await api.post(
                `/cart/add-to-cart/user/2/product/${productId}`,
                { quantity }
            )

            Alert.alert('Sucesso', 'Produto adcionado ao carrinho')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <TouchableOpacity
                style={style.information}
                onPress={invertExpand}
            >
                <Text style={style.name}>{title}</Text>
                <Text style={style.description}>{description}</Text>
                <Text style={style.price}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(price)}
                </Text>
            </TouchableOpacity>
            {expand && (
                <View style={style.cart}>
                    <View>
                        <View style={style.value}>
                            <Text style={style.description}>
                                Quantidade:{' '}
                            </Text>
                            <IntInput
                                style={style.quantity}
                                value={quantity}
                                action={updateTotalQuantity}
                            />
                        </View>

                        <View style={style.value}>
                            <Text style={style.description}>
                                Total:{' '}
                            </Text>
                            <Text style={style.price}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(total)}
                            </Text>
                        </View>
                    </View>

                    <Button
                        value="Adicionar ao Carrinho"
                        action={() => addToCart(id, quantity)}
                    />
                </View>
            )}
            <View style={style.divider}></View>
        </>
    )
}

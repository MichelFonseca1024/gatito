import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/Button/index.js'
import IntInput from '../../../components/IntInput'
import style from './style'

export default function Item({
  name,
  price,
  description,
  quantity: initialQuantity,
}) {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [total, setTotal] = useState(price * initialQuantity)

  const updateTotaQuantity = (newQuantity) => {
    setQuantity(newQuantity)
    computedTotal(newQuantity)
  }

  const computedTotal = (newQuantity) => {
    setTotal(newQuantity * price)
  }

  return (
    <>
      <View style={style.information}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description}</Text>
        <Text style={style.price}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </Text>
      </View>

      <View style={style.cart}>
        <View>
          <View style={style.value}>
            <Text style={style.description}>Quantidade: </Text>
            <IntInput
              style={style.quantity}
              value={quantity}
              action={updateTotaQuantity}
            />
          </View>

          <View style={style.value}>
            <Text style={style.description}>Total: </Text>
            <Text style={style.price}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(total)}
            </Text>
          </View>
        </View>

        <Button
          value="Remover ao Carrinho"
          action={() => {
            console.log('fazer chamada a api')
          }}
        />
      </View>
      <View style={style.divider}></View>
    </>
  )
}

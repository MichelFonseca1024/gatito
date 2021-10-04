import React from 'react'

import { View, Text } from 'react-native'

import Button from '../Button'
import style from './style'

export default function CartState({ total }) {
  return (
    <View style={style.content}>
      <View style={style.total}>
        <Text style={style.description}>Total do Carrinho:</Text>
        <Text style={style.value}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </Text>
      </View>
      <View style={style.button}>
        <Button value="Concluir Pedido" inverted />
      </View>
    </View>
  )
}

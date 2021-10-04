import React from 'react'

import { FlatList } from 'react-native'
import Item from './Item'
import CartState from '../../components/CartState'

const services = [
  {
    id: 1,
    name: 'Banho',
    price: 79.9,
    descrition: 'NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Vacina V4',
    price: 89.9,
    descrition: 'Uma dose da vacina V4. Seu gato precisa de duas.',
    quantity: 2,
  },
  {
    id: 3,
    name: 'Vacina Antirrábica',
    price: 99.9,
    descrition:
      'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.',
    quantity: 4,
  },
]

export default function Cart() {
  const total = services.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  )

  return (
    <>
      <CartState total={total} />
      <FlatList
        data={services}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}

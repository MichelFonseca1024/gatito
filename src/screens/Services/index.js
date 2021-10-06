import React, { useEffect, useState } from "react"

import { FlatList } from "react-native"
import Item from "./Item"
import { api } from "../../services/api"

// const S1ervices = [
//   {
//     id: 1,
//     name: "Banho",
//     price: 79.9,
//     description: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.",
//   },
//   {
//     id: 2,
//     name: "Vacina V4",
//     price: 89.9,
//     description: "Uma dose da vacina V4. Seu gato precisa de duas.",
//   },
//   {
//     id: 3,
//     name: "Vacina Antirrábica",
//     price: 99.9,
//     description:
//       "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
//   },
// ]

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    async function getServices() {
      try {
        const { data } = await api.get("products")

        setServices(data.data)
      } catch (err) {
        console.log(err)
      }
    }

    getServices()
  }, [])

  return (
    <>
      <FlatList
        data={services}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}

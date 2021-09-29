import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Botao from "../../../components/Botao/index.js"
import CampoInteiro from "../../../components/CampoInteiro"
import estilos from "./estilos"

export default function Item({
  nome,
  preco,
  descricao,
  quantidade: quantidadeInicial,
}) {
  const [quantidade, setContidade] = useState(quantidadeInicial)
  const [total, setTotal] = useState(preco * quantidadeInicial)

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setContidade(novaQuantidade)
    calculaTotal(novaQuantidade)
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco)
  }

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </View>

      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade: </Text>
            <CampoInteiro
              estilos={estilos.quantidade}
              valor={quantidade}
              acao={atualizaQuantidadeTotal}
            />
          </View>

          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Total: </Text>
            <Text style={estilos.preco}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>

        <Botao valor="Remover ao Carrinho" acao={""} />
      </View>
      <View style={estilos.divisor}></View>
    </>
  )
}

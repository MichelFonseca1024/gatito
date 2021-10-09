import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import DefaultStyle from './style'

export default function Button({
  small = false,
  inverted = false,
  value,
  action,
}) {
  const defaultStyle = DefaultStyle(small, inverted)

  return (
    <TouchableOpacity onPress={action} style={defaultStyle.button}>
      <Text style={defaultStyle.value}>{value}</Text>
    </TouchableOpacity>
  )
}

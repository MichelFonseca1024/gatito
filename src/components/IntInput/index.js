import React from 'react'
import { TextInput } from 'react-native'
import styleDefault from './style'

export default function IntInput({ value, style, action }) {
  const number = String(value)
  const update = (newValue, actionReturn) => {
    const checkField = newValue.match(/^[0-9]*$/)

    if (!checkField) return

    const removeZero = newValue.replace(/^(0)(.+)/, '$2')

    actionReturn(removeZero)
  }

  return (
    <TextInput
      style={[styleDefault.field, style]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(newValue) => {
        action(newValue)
      }}
      value={number}
    />
  )
}

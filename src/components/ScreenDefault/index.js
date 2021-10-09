import React from 'react'

import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import styleGlobal, { colors } from '../../style'
import style from './style'

export default function ScreenDefault({ children }) {
  return (
    <>
      <SafeAreaView style={style.fitScreen}>
        <StatusBar backgroundColor={colors.purple} />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styleGlobal.fill}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={style.fitScreenBotton} />
    </>
  )
}

import React from 'react'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Routes from './src/routes'
import ScreenDefault from './src/components/ScreenDefault'

export default function App() {
  return (
    <ScreenDefault>
      <Routes />
    </ScreenDefault>
  )
}

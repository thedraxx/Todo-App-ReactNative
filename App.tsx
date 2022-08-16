import React from 'react'

import { Provider } from 'react-redux'
import MainStack from './src/navigations/MainStack'

import { store } from './src/store/store'

export const App = () => {
  return (
      <Provider store={store}>
        <MainStack />
      </Provider>
  )
}

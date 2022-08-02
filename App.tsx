import React from 'react'
import { Provider } from 'react-redux'
import { MainStack } from './src/navigations/MainStack'
import { store } from './src/store/store'

export const App = () => {
  return (
    // Provider is a component that provides the store to all of the components in the application
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}

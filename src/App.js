import React from 'react'

import { Home } from './Home'
import { NavBar } from './components/NavBar'
import { Provider } from 'react-redux'
import { store } from './state/store'
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Home></Home>
    </Provider>
  )
}

export default App

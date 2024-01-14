import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import NavMobile from './components/navbar/NavMobile'
import ItemsContainer from './components/ItemsContainer'

import './App.css'

function App() {
  

  return (
    <div>
      <Header />
      <NavMobile />
      <ItemsContainer />
    </div>
  )
}

export default App

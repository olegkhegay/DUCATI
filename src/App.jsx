import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Product from './components/Product/Product'
import { useAppContext } from './context'



const App = () => {

  const {isCard1, isCard2, togleOpen1, toggleOpen2} = useAppContext()

  return (
    <>
      {isCard1 ? (<Product image={'/moto11.png'} price='109.990,00' oldPrice='129.090,00'/>) : null}
      {isCard2 ? (<Product image={'/moto22.png'} price='89.990,00' oldPrice='105.090,00'/>) : null}
      
      <Header />
    </>
  )
}

export default App
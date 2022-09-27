import React from 'react'
import ProductList from './Components/Products'
import Navbar from './Template/Navbar'
import Selector from './Template/Selector'

function Home() {
  return (
    <>
        <Navbar Selectors = {<Selector/>}/>
        <ProductList/>
    </>
  )
}

export default Home
import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductModel from './components/ProductModel'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <ProductModel />
   </main>
  )
}

export default App

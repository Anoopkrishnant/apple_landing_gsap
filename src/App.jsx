import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductModel from './components/ProductModel'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import Showcase from './components/Showcase'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <ProductModel />
    <Showcase />
   </main>
  )
}

export default App

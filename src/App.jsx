import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Home/Header'
import Contect from './components/Home/Contect'
import About from './components/Home/About'
import WeDo from './components/Home/WeDo'
import Testimonial from './components/Home/Testimonial'
import Loader from './components/Home/Loader'
import { useMyContext } from "./CreateContext"
import { useLocation } from 'react-router-dom'
const App = () => {
  const { loading, setLoading } = useMyContext()
  const { pathname } = useLocation()
  let timeout;
  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }

  }, [pathname])


  console.log(loading)
  console.log(pathname)

  return (
    loading ? <Loader /> :
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/furnitures' element={<WeDo />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contact' element={null} />

        </Routes>
        <Contect />
      </>

  )
}

export default App
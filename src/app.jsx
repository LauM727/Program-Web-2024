import React from 'react'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Body } from './components/Body/Body'
import { NavBar } from './components/NavBar/NavBar'

export default function App () {
  return (
    <>
      <Header />
      <Banner />
      <Body />
      <NavBar />
    </>
  )
}

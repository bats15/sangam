import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page0 from './components/page0/Page0'
import './App.css'

function App() {

  return (
    <main>
      <Navbar />
      <Page0 />
      <Page1 />
      <Page2 />
    </main>
  )
}

export default App

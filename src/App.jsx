import React from 'react'
import { Header } from './pages/Header'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Services } from './pages/Services'
import { Reasons } from './pages/Reasons'
import { Contact } from './pages/Contact'
import { Footer } from './pages/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Services/>
      <Reasons/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
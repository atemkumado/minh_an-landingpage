import React from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Reasons } from './components/Reasons'
import { Contact } from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Services/>
      <Reasons/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
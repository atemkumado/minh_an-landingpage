import React from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  )
}

export default App
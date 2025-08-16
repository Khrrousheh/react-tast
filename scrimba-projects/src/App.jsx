import { useState } from 'react'
import './App.css'
import FunfactsReact from './components/FunFacts'
import Card from './components/PorjectCard'
import BusinessCard from './components/BusniessCard'
function App() {

  return (
    <>
      <section>
        <h2>Learn React - Static pages / components</h2>
        <div className='projects-container'>

          <Card
            header={<h3>Fun Facts about React</h3>}
            footer={<p>Static page</p>}
          >
            <FunfactsReact />
          </Card>

                    <Card
            header={<h3>Fun Facts about React</h3>}
            footer={<p>Static page</p>}
          >
            <BusinessCard />
          </Card>

        </div>
      </section>
    </>
  )
}

export default App

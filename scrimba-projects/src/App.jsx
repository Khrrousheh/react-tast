import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FunfactsReact from './components/fun_facts'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h2>Learn React - Static pages / components</h2>
        <div className='projects-container'>
          <FunfactsReact />
        </div>
      </section>
    </>
  )
}

export default App

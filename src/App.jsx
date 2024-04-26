import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentMethod from './Components/PaymentMethod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PaymentMethod/>
    </>
  )
}

export default App

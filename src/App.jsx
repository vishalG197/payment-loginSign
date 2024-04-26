
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentMethod from './Components/PaymentMethod'

import BillingAddressForm from './Components/BillingAdress'


function App() {

  return (
    <>

     <PaymentMethod/>

     <BillingAddressForm/>

    </>
  )
}

export default App

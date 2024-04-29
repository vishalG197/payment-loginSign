

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentMethod from './Components/PaymentMethod'

import BillingAddressForm from './Components/BillingAdress'
import styled from 'styled-components'


import PaymentMethod from './Components/PaymentMethod'

import BillingAddressForm from './Components/BillingAdress'
import styled from 'styled-components';



function App() {

  return (

    <Container>



     <PaymentMethod/>

     <BillingAddressForm/>


    </Container>


  )
}

export default App


const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between     ;

`


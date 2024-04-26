

import PaymentMethod from './Components/PaymentMethod'

import BillingAddressForm from './Components/BillingAdress'
import styled from 'styled-components';


function App() {

  return (
    <Div>

     <PaymentMethod/>

     <BillingAddressForm/>

    </Div>
  )
}

export default App
const Div = styled.div`
display : flex;
justify-content : center;
align-items : center;

`;
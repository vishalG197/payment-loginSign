import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentMethod = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [selectedCard, setSelectedCard] = useState('');

    console.log(selectedCard);
    const validatePayment = () => {
        if (
            cardNumber.length === 15||16 &&
            expiryMonth.length === 2 &&
            expiryYear.length === 2 &&
            cvv.length === 3
        ) {
            // Proceed with payment
            console.log('Payment successful');
        } else {
            console.log('Please enter valid card details');
        }
    };

    return (
        <MainContainer>
            <PaymentForm>
                <PaymentHeader>Payment Method</PaymentHeader>
                <CardOptions>
                   <label style={{ backgroundColor: selectedCard === 'visa' ? '#007bff' : 'white' ,padding:'5px'}}>
                        <input
                            type="radio"
                            value="visa"
                            checked={selectedCard === 'visa'}
                            onChange={() => setSelectedCard('visa')}
                        />
                        VISA Credit Card
                    </label>
                    <label style={{ backgroundColor: selectedCard === 'mastercard' ? '#007bff' : 'white',padding:'5px' }}>
                        <input
                            type="radio"
                            value="mastercard"
                            checked={selectedCard === 'mastercard'}
                            onChange={() => setSelectedCard('mastercard')}
                        />
                        MasterCard Credit Card
                    </label>
                    <label style={{ backgroundColor: selectedCard === 'amex' ? '#007bff' : 'white' ,padding:'5px'}}>
                        <input
                            type="radio"
                            value="amex"
                            checked={selectedCard === 'amex'}
                            onChange={() => setSelectedCard('amex')}
                        />
                        American Express Credit Card
                    </label>
                </CardOptions>
                <hr />
                <InputLabel>Credit Card Number</InputLabel>
                <Input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').substring(0, 16))}
                    placeholder="Enter card number"
                />
               {cardNumber.length !== 16 && (
                        <ErrorMessage>Please enter a valid 16-digit card number.</ErrorMessage>
                    )}
                <InputLabel>Expiry Date (MM/YY)</InputLabel>
                <InputWrapper>
                    <Input
                        type="number"
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value.replace(/\D/g, '').substring(0, 2))}
                        placeholder="MM"
                        min="1"
                        max="12"
                    />
                    <Separator>/</Separator>
                    
                    <Input
                        type="number"
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value.replace(/\D/g, '').substring(0, 2))}
                        placeholder="YY"
                        min={(new Date().getFullYear() % 100).toString().padStart(2, '0')}
                        max="99"
                    />
                </InputWrapper>
                     {(expiryMonth.length !== 2 || expiryYear.length!==2)&&(
                        <ErrorMessage>Please enter a valid expiry date.</ErrorMessage>
                    )}
                <InputLabel>CVV Code</InputLabel>
                <Input
                    type="number"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                    placeholder="CVV"
                    maxLength="3"
                />
                  {cvv.length !== 3 &&(
                        <ErrorMessage>Please enter a valid cvv number.</ErrorMessage>
                    )}
                <SubmitButton onClick={validatePayment}>Make Payment</SubmitButton>
            </PaymentForm>

        </MainContainer>
    );
};

export default PaymentMethod;

const MainContainer = styled.div`
    width: 50%;

    background-color: #f9f9f9;

    padding: 30px;
    height: 100vh;
`;
const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8em;
    margin-top: -8px;  
    margin-bottom:10px;      
`;
const PaymentForm = styled.div`   
    margin:auto; 

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8em;
    margin-top: -15px;  
    margin-bottom:10px;      
`;

const PaymentForm = styled.div`

    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
`;

const PaymentHeader = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const CardOptions = styled.div`

    
    label {
        display: block;
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 5px;
      
        input {
            margin-right: 10px;
        }
    }
`;

const InputLabel = styled.p`

    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 2px;
`;

const InputWrapper = styled.div`
    display: flex;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 8px;
`;

const Separator = styled.span`
    margin: 0 5px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

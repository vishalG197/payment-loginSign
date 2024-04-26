import React, { useState } from 'react';
import styled from 'styled-components';
import { MdMyLocation } from "react-icons/md";

const AddressForm = ({onFormSubmit,onCancle}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternate: '',
    addressType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onFormSubmit(formData);
    // Add your logic for submitting the form data here
  };

  return (
    <Container>
      <ContentContainer>
        <Title>ADD A NEW ADDRESS</Title>
        <LocationButton>
          <MdMyLocation /> Use my current location
        </LocationButton>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputField type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <InputField type="tel" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputField type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
            <InputField type="text" name="locality" placeholder="Locality" value={formData.locality} onChange={handleChange} />
          </InputGroup>
          <InputArea>
            <TextAreaField name="address" placeholder='Address (Area and Street)' value={formData.address} onChange={handleChange} />
          </InputArea>
          <InputGroup>
            <InputField type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <InputField type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputField type="text" name="landmark" placeholder="Landmark (Optional)" value={formData.landmark} onChange={handleChange} />
            <InputField type="text" name="alternate" placeholder="Alternate (Optional)" value={formData.alternate} onChange={handleChange} />
          </InputGroup>
          <RadioGroup>
            <RadioButton type="radio" id="home" name="addressType" value="home" onChange={handleChange} checked={formData.addressType === 'home'} />
            <Label htmlFor="home">Home</Label>
            <RadioButton type="radio" id="work" name="addressType" value="work" onChange={handleChange} checked={formData.addressType === 'work'} />
            <Label htmlFor="work">Work</Label>
          </RadioGroup>
          <ButtonGroup>
            <Button type="submit">SAVE</Button>
            <Button type="button" onClick={onCancle}>CANCEL</Button>
          </ButtonGroup>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default AddressForm;

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 2% 0;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const LocationButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 10px;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InputArea = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 10px;
  gap: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Label = styled.label``;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

// BillingAddressForm.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus, FaAddressCard, FaTrashAlt } from 'react-icons/fa';
import AddressCard from './AddressCard';
import AddressForm from './Addressform';
import { Toaster, toast } from 'react-hot-toast';
export const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const BillingAddressForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        const data = await response.json();
        setSavedAddresses(data);
      } else {
        toast.error('Error fetching addresses');
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
      toast.error('Error fetching addresses');
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
    setShowForm(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Address saved successfully');
        fetchAddresses();
      } else {
        toast.error('Error saving address');
      }
    } catch (error) {
      console.error('Error saving address:', error);
      toast.error('Error saving address');
    }
  };

  const handleAddressDeletion = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Address deleted successfully');
        setSelectedAddress(null); // Clear selected address after deletion
        fetchAddresses();
      } else {
        toast.error('Error deleting address');
      }
    } catch (error) {
      console.error('Error deleting address:', error);
      toast.error('Error deleting address');
    }
  };

  const handleDeleteSelectedAddress = () => {
    if (selectedAddress) {
      handleAddressDeletion(selectedAddress.id);
    }
  };

  return (
    <Container>
      <Heading>
        <Icon>
          <FaAddressCard />
        </Icon>
        Billing Address
      </Heading>
      <Button onClick={toggleForm}>
        <Icon>
          {showForm ? <FaMinus /> : <FaPlus />}
        </Icon>
        {showForm ? 'Dismiss Form' : 'Add New Address'}
      </Button>
      {selectedAddress && (
        <SelectedAddressContainer>
          <h3>Selected Address</h3>
          <AddressCard address={selectedAddress} onDelete={handleDeleteSelectedAddress}/>
          {/* <DeleteButton onClick={handleDeleteSelectedAddress}>
            <FaTrashAlt />
            Delete Selected
          </DeleteButton> */}
        </SelectedAddressContainer>
      )}
      {showForm && <AddressForm onFormSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />}
      <h4>Or Use Saved Addresses</h4>
      <SavedAddresses>
        {savedAddresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onDelete={handleAddressDeletion}
            onSelect={handleAddressSelection}
            isSelected={selectedAddress && selectedAddress.id === address.id}
          />
        ))}
      </SavedAddresses>
      <Toaster position="top-right" />
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  border: 1px solid #ccc;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  gap: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Button = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
`;

const SelectedAddressContainer = styled.div`
  border: 1px solid #ccc;
  background-color: skyblue;
  padding: 10px;
  margin-top: 20px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

const SavedAddresses = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;

export default BillingAddressForm;

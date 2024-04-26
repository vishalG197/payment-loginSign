import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const AddressCard = ({ address = {}, onDelete, onEdit, onSelect , isSelected=false}) => {
  const { name = '', address: { street = '', city = '', zipcode = '', country = '' } = {} } = address;

  const handleDelete = () => {
    onDelete(address.id);
  };

  const handleEdit = () => {
    onEdit(address);
  };

  const handleSelect = () => {
    onSelect(address);
  };

  return (
    <CardContainer onClick={handleSelect} isSelected={isSelected}>
      <CardContent>
        <CardHeading>{name}</CardHeading>
        <CardText>{street || 'Street Address'}</CardText>
        <CardText>{`${city || 'City'}, ${zipcode || 'Zipcode'}`}</CardText>
        <CardText>{country || 'Country'}</CardText>
      </CardContent>
      <CardActions>
        <ActionIcon onClick={handleEdit}>
          <FaEdit />
        </ActionIcon>
        <ActionIcon onClick={handleDelete}>
          <FaTrashAlt />
        </ActionIcon>
      </CardActions>
    </CardContainer>
  );
};

export default AddressCard;

const CardContainer = styled.div`
  border: 1px solid ${({ isSelected }) => isSelected ? 'blue' : '#ccc'};
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? '#e0e0e0' : 'transparent')};
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CardContent = styled.div``;

const CardHeading = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardText = styled.div`
  color: #666;
`;

const CardActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionIcon = styled.span`
  color: #999;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #333;
  }
`;

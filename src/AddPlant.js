import React, { useState, useEffect } from "react";
import { addPlant } from "./API";
import styled from "styled-components";

export default function AddPlant({ handleGetPlants }) {
  const [sent, setSent] = useState(false);
  const [first, updateFirst] = useState("");
  const [last, updateLast] = useState("");
  const [street, updateStreet] = useState("");
  const [postcode, updatePostCode] = useState("");
  const [phone, updatePhone] = useState("");
  const [age, updateAge] = useState("");
  const [sex, updateSex] = useState(1);
  const handleSetFocus = () => {
    document.querySelector("[id=firstname]").focus();
  };
  useEffect(() => {
    handleSetFocus();
  }, []);
  const sendPlant = async () => {
    if (first && last && street && postcode && phone && age && sex) {
      await addPlant({ first, last, street, postcode, phone, age, sex });

      updateFirst("");
      updateLast("");
      updateStreet("");
      updatePostCode("");
      updatePhone("");
      updateAge("");
      updateSex(1);
      setSent(true);
      handleGetPlants();
      setTimeout(() => {
        setSent(false);
      }, 5000);
    }
    handleSetFocus();
  };

  const handleFirst = ({ target }) => {
    updateFirst(target.value);
  };
  const handleLast = ({ target }) => {
    updateLast(target.value);
  };
  const handleStreet = ({ target }) => {
    updateStreet(target.value);
  };
  const handlePhone = ({ target }) => {
    updatePhone(target.value);
  };
  const handlePostCode = ({ target }) => {
    updatePostCode(target.value);
  };
  const handleAge = ({ target }) => {
    updateAge(target.value);
  };
  const handleSex = ({ target }) => {
    updateSex(target.value);
  };

  return (
    <Wrap>
      <H1>Submit a Plant</H1>
      <Span sent={sent}>Plant Submitted</Span>
      <Input
        id="firstname"
        type="text"
        value={first}
        onChange={handleFirst}
        placeholder="First Name"
      />
      <Input
        type="text"
        value={last}
        onChange={handleLast}
        placeholder="Last Name"
      />
      <Input
        type="text"
        value={street}
        onChange={handleStreet}
        placeholder="Street"
      />
      <Input
        type="text"
        value={postcode}
        onChange={handlePostCode}
        placeholder="Postal Code"
      />
      <Input
        type="tel"
        pattern="[0-9]{3}"
        value={phone}
        onChange={handlePhone}
        placeholder="Phone Number"
      />
      <Input type="number" value={age} onChange={handleAge} placeholder="Age" />
      <Select value={sex} onChange={handleSex}>
        <option value={1}>Male</option>
        <option value={2}>Female</option>
      </Select>
      <Input type="submit" onClick={sendPlant} value="Submit" />
    </Wrap>
  );
}

const H1 = styled.h1`
  color: white;
  font-weight: bold;
`;

const Span = styled.span`
  color: white;
  background: darkgreen;
  padding: 10px;
  display: ${({ sent }) => (sent ? "block" : "none")};
`;
const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
  &[type="submit"] {
    background: purple;
    color: #ccc;
    font-weight: bold;
    &:hover {
      background: #333;
      color: white;
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: left;
  flex-direction: column;
  margin: auto;
  width: 80%;
`;

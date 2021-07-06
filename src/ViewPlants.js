import React, { useState } from "react";
import { updatePlant, deletePlant } from "./API";
import styled from "styled-components";

export default function ViewPlants({ plants, handleGetPlants }) {
  const [notification, setNotification] = useState(null);

  const handleSendNotification = (notification) => {
    setNotification(notification);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleUpdatePlant = async (id) => {
    await updatePlant(id);
    handleGetPlants();
    handleSendNotification("Plant Set to Used");
  };

  const handleDeletePlant = async (id) => {
    await deletePlant(id);
    handleGetPlants();
    handleSendNotification("Plant Deleted");
  };

  return (
    <Wrap>
      <H1>Plants</H1>
      <Span>{notification}</Span>
      <Table cellSpacing={0}>
        <thead>
          <Tr>
            <Td>First Name</Td>
            <Td>Last Name</Td>
            <Td>Area</Td>
            <Td>Age</Td>
            <Td>Sex</Td>
            <Td>Action</Td>
          </Tr>
        </thead>
        <tbody>
          {plants
            .sort(({ status }) => (status === 1 ? -1 : 1))
            .map(({ id, first, last, postcode, age, sex, status }, key) => {
              return (
                <Tr className={status === 1 ? "unused" : "used"} key={key}>
                  <Td>{first}</Td>
                  <Td>{last}</Td>
                  <Td>{postcode}</Td>
                  <Td>{age}</Td>
                  <Td>{sex === 1 ? "Male" : "Female"}</Td>
                  <Td>
                    {status === 1 && (
                      <Button onClick={() => handleUpdatePlant(id)}>Use</Button>
                    )}
                    <Button onClick={() => handleDeletePlant(id)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
        </tbody>
      </Table>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: left;
  flex-direction: column;
  margin: auto;
  width: 80%;
`;

const Span = styled.span`
  background: green;
  padding: 5px;
  display: ${({ notification }) => (notification ? "block" : "none")};
`;

const H1 = styled.h1`
  color: white;
  font-weight: bold;
`;

const Table = styled.table``;

const Tr = styled.tr`
  color: white;
  background: #333;
  display: column;
  text-align: center;
  &:nth-child(odd) {
    background: white;
    color: black;
  }
  &.used {
    background: grey;
    color: darkgray;
  }
`;

const Td = styled.td`
  border: 1px solid black;
`;

const Button = styled.button`
  margin: 3px;
`;

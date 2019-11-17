import React from 'react';
import styled from "styled-components";

import ArrowButton from "./ArrowButton";
import AutoCompleteInput from "./AutoCompleteInput";


const Heading = styled.div`
  color: black;
  margin-top: 8px;
  font-size: 18px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  padding: 20px;
`

export default function SearchLocation({ handleArrowClick }) {
  const [state, setState] = React.useState({
    name: 'Nuuksio',
  });

  return (
    <div>
      <form>
        <Container>
          <AutoCompleteInput />
          <Heading>Forecasting Finlands national park visitors</Heading>
        </Container>

      </form>


      <Container>
        <ArrowButton onClick={handleArrowClick} />
      </Container>

    </div>

  )
}
import React, { useState } from 'react';
import styled from "styled-components";

const Root = styled.div`
padding: 8px 40px;
border: 3px solid black;
color: gray;
background-color: white;
border-radius: 81px;
max-width: 240px;

`
const Input = styled.input`
background-color:transparent;
outline: none;
    border: none;
    height: 40px;
    width: 100%;
    font-size: 32px;
    

    &::placeholder {
font-family: Rokkitt;
    }
`
function AutoCompleteInput() {

    return (
        <Root >
            <Input placeholder="Nuuksio"></Input>
        </Root>
    );
}

export default AutoCompleteInput;

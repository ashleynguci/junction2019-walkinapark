import React, { useState } from 'react';
import styled from "styled-components";

const Root = styled.div`
    height: 32px;
    width: 4px;
    background-color: black;
    background-color: black;
    position: relative;
    cursor: pointer;
    transition: 250ms ease-in transform;
    

    &:active {
        transform: scale(1.1);
    }



    &::before,
    &::after {
        position: absolute;
        background-color: black;
        content: "";
        width: 16px;
        height: 4px;
        bottom: 1px;
        transform: rotate(-45deg);
        right: -11px;
    }

    &::before {
        transform: rotate(45deg);
        left: -11px;
    }

`

function ArrowButton(props) {

    return (
        <Root {...props} />
    );
}

export default ArrowButton;

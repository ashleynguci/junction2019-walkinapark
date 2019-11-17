//@ts-check
import React, { useState, useRef } from 'react';
import styled from "styled-components";
import Chart from './components/Chart';
import SearchLocation from './components/SearchLocation';

import './App.css';
import backGroundImg from "./img/mountain-clipart-transparent-3.png";
import chartBground from "./img/chartBG.jpg";

const MountainBackGround = styled.img`
`

const ChartContainer = styled.div`
padding-bottom:100px;
display:flex;
justify-content:center;


`

function App() {
  const [input, setInput] = useState("");
  const [showChart, setShowChart] = useState(false);

  const chartRef = useRef(null)



  return (
    <div className="App" >
      <h1>walkinapark</h1>
      <div className="App-header">
        <SearchLocation
          handleArrowClick={() => {
            setShowChart(true)

            setTimeout(() => {
              if (chartRef.current) {
                window.scrollTo({
                  top: 1800,
                  behavior: 'smooth'
                });
              }
            })
          }} />
      </div>
      <MountainBackGround src={backGroundImg} />

      {showChart && <ChartContainer ref={chartRef}><Chart /></ChartContainer>}
    </div>

  );
}

export default App;

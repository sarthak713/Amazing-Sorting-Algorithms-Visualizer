import React, { useEffect } from 'react';
import Generate_array ,{ delbar, hideForMain } from '../scripts/main';
import '../App.css';
import '../style/Navbar.css';

export default function Navbar() {

  useEffect(() => {
    Generate_array();
  });
  const NewArrButton=()=>{
    delbar();
    Generate_array(document.getElementById("a_size").value);
  };
  const ShowDef=()=>{
    hideForMain();
  }

  return (
    <>
    
      <div className="nav">

        <div className="mainhead" onClick={ShowDef}>
          <p id="head1">Amazing</p>
          <p id="head2">SORTING ALGORITHMS</p>
          <p id="head3">VISUALIZER</p>
        </div>

        <div className="controls">

          <div className="sizeBox">
            <p className="rangetext">Array Size</p>
            <div className="field">
              <input type="range" id="a_size" onChange={NewArrButton} defaultValue={40} min="10" max="70" step={10}/>
            </div>
          </div>

          <button id="a_generate" onClick={NewArrButton}>New Array</button>
          
          <div className="speedBox">
            <p className="rangetext">Sort Speed</p>
            <div className="field">
              <input type="range" id="a_speed" defaultValue={-100} min="-300" max="100"/>
            </div>
          </div>  

        </div>

      </div>

    </>
  )
}

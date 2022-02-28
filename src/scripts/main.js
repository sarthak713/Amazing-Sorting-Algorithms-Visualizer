import React from 'react';
import '../App.css';

export default function Generate_array(arraySize = 40) {

  const bars = document.querySelector(".array_container");
  const min = 80;
  const max = 400;

  for (let i = 0; i < arraySize; i++) {             
    const rand = min + Math.random() * (max - min); 
    const bar  = document.createElement("div");
    bar.classList.add("flex-item");
    bar.style.height = `${parseInt(rand)}px`;     
    bar.style.width =((arraySize==='10')?"93.7px":
                      (arraySize==='20')?"44.9px":
                      (arraySize==='30')?"28.6px":
                      (arraySize==='40')?"20.5px":
                      (arraySize==='50')?"15.6px":
                      (arraySize==='60')?"12.3px":
                      (arraySize==='70')?"10px":"20.5px");
    bars.appendChild(bar);
  }

  return (
    <></>
  );
}


export function delbar() {
  const del = document.querySelector(".array_container");
  del.innerHTML = "";
}

export function Wait(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

export function disable() 
{
  document.querySelector("#a_generate").disabled = true;
  document.querySelector("#a_size").disabled = true;

  document.querySelector("#bsort").disabled = true;
  document.querySelector("#isort").disabled = true;
  document.querySelector("#msort").disabled = true;
  document.querySelector("#qsort").disabled = true;
  document.querySelector("#ssort").disabled = true;
}

export function enable() 
{
  document.querySelector("#a_generate").disabled = false;
  document.querySelector("#a_size").disabled = false;
  
  document.querySelector("#bsort").disabled = false;
  document.querySelector("#isort").disabled = false;
  document.querySelector("#msort").disabled = false;
  document.querySelector("#qsort").disabled = false;
  document.querySelector("#ssort").disabled = false;
}
// Definition Boxes
export function hideForB() {
  document.querySelector(".bdef").style.display="block";
  document.querySelector(".idef").style.display="none";
  document.querySelector(".mdef").style.display="none";
  document.querySelector(".qdef").style.display="none";
  document.querySelector(".sdef").style.display="none";
  document.querySelector(".maindef").style.display="none";
}
export function hideForI() {
  document.querySelector(".idef").style.display="block";
  document.querySelector(".bdef").style.display="none";
  document.querySelector(".mdef").style.display="none";
  document.querySelector(".qdef").style.display="none";
  document.querySelector(".sdef").style.display="none";
  document.querySelector(".maindef").style.display="none";
}
export function hideForM() {
  document.querySelector(".mdef").style.display="block";
  document.querySelector(".idef").style.display="none";
  document.querySelector(".bdef").style.display="none";
  document.querySelector(".qdef").style.display="none";
  document.querySelector(".sdef").style.display="none";
  document.querySelector(".maindef").style.display="none";
}
export function hideForQ() {
  document.querySelector(".qdef").style.display="block";
  document.querySelector(".idef").style.display="none";
  document.querySelector(".mdef").style.display="none";
  document.querySelector(".bdef").style.display="none";
  document.querySelector(".sdef").style.display="none";
  document.querySelector(".maindef").style.display="none";
}
export function hideForS() {
  document.querySelector(".sdef").style.display="block";
  document.querySelector(".idef").style.display="none";
  document.querySelector(".mdef").style.display="none";
  document.querySelector(".qdef").style.display="none";
  document.querySelector(".bdef").style.display="none";
  document.querySelector(".maindef").style.display="none";
}
export function hideForMain() {
  document.querySelector(".sdef").style.display="none";
  document.querySelector(".idef").style.display="none";
  document.querySelector(".mdef").style.display="none";
  document.querySelector(".qdef").style.display="none";
  document.querySelector(".bdef").style.display="none";
  document.querySelector(".maindef").style.display="block";
}

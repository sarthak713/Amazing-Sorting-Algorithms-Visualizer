import React from 'react';
import '../App.css';
import '../style/SortingBar.css';
import BubbleSort from '../sorting/Bubble';
import InsertionSort from '../sorting/Insertion';
import MergeSort from '../sorting/Merge';
import QuickSort from '../sorting/Quick';
import SelectionSort from '../sorting/Selection';

import { hideForB, hideForI, hideForM, hideForQ, hideForS } from '../scripts/main'


export default function SortingBar() {

  const BubbleSortButton=()=>{
    BubbleSort(document.getElementById("a_size").value);
    hideForB();
  }
  const InsertionSortButton=()=>{
    InsertionSort(document.getElementById("a_size").value);
    hideForI();
  }
  const MergeSortButton=()=>{
    MergeSort(document.getElementById("a_size").value);
    hideForM();
  }
  const QuickSortButton=()=>{
    QuickSort(document.getElementById("a_size").value);
    hideForQ();
  }
  const SelectionSortButton=()=>{
    SelectionSort(document.getElementById("a_size").value);
    hideForS();
  }

  return (
    <>

      <div className="sortBar">

        <button className='sortButton' id="bsort" onClick={BubbleSortButton}>Bubble Sort</button>
        <button className='sortButton' id="isort" onClick={InsertionSortButton}>Insertion Sort</button>
        <button className='sortButton' id="msort" onClick={MergeSortButton}>Merge Sort</button>
        <button className='sortButton' id="qsort" onClick={QuickSortButton}>Quick Sort</button>
        <button className='sortButton' id="ssort" onClick={SelectionSortButton}>Selection Sort</button>
      
      </div>

    </>
  )
}

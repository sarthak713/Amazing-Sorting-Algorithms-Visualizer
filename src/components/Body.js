import React from 'react';
import '../App.css';
import '../style/Body.css';

export default function Body() {
  return (
    <>
      
      <div className="mainBody">

        <div className="definition">

          <div className="maindef">
            <p>Sorting is the process of arranging data in ascending or descending order.</p>
            <p>A sorting algorithm is used to arrange the elements of an array in a specific order.</p>
          </div>

          <div className="bdef">
            <p>Bubble sort repeatedly steps through the array, compares the adjacent elements and swaps them if they are in the wrong order.</p>
            <ul>
              <li>Time Complexity : O(n<sup>2</sup>)</li>
              <li>Space Complexity : O(1)</li>
              <li>Method : Exchanging</li>
              <li>Stable : Yes</li>
              <li>Adaptive : Yes</li>
            </ul>
          </div>

          <div className="idef">
            <p>Insertion sort places an unsorted element at its suitable place in each iteration.</p>
            <ul>
              <li>Time Complexity : O(n<sup>2</sup>)</li>
              <li>Space Complexity : O(1)</li>
              <li>Method : Insertion</li>
              <li>Stable : Yes</li>
              <li>Adaptive : Yes</li>
            </ul>
          </div>

          <div className="mdef">
            <p>Merge Sort is based on principle of Divide & Conquer.
               The array is divided into multiple sub-arrays. Each sub-array is sorted individually & finally, sorted sub-arrays are merged to form the final sorted array.</p>
            <ul>
              <li>Time Complexity : O(n log n)</li>
              <li>Space Complexity : O(n)</li>
              <li>Method : Merging</li>
              <li>Stable : Yes</li>
              <li>Adaptive : No</li>
            </ul>
          </div>

          <div className="qdef">
            <p>Quick Sort sorts an array by continuously dividing the array into 2 parts, moving smaller elements to one side & larger ones to the other.
               It starts by picking one item in the entire array to serve as a pivot point.</p>
            <ul>
              <li>Time Complexity : O(n log n)</li>
              <li>Space Complexity : O(log n)</li>
              <li>Method : Partitioning</li>
              <li>Stable : No</li>
              <li>Adaptive : No</li>
            </ul>
          </div>

          <div className="sdef">
            <p>Selection sort repeatedly finds the minimum element from unsorted (right) part and puts it at its correct position in sorted (left) part.</p>
            <ul>
              <li>Time Complexity : O(n<sup>2</sup>)</li>
              <li>Space Complexity : O(1)</li>
              <li>Method : Selection</li>
              <li>Stable : No</li>
              <li>Adaptive : No</li>
            </ul>
          </div>

        </div>

        <div className="array_container"></div>
     
      </div>

    </>
  )
}

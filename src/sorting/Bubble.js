import { disable, enable, Wait } from '../scripts/main';


function swap(i1, i2) 
{
    let temp = i1.style.height;
    i1.style.height = i2.style.height;
    i2.style.height = temp;
}


export default async function BubbleSort() 
{

    disable();
    const ele = document.querySelectorAll(".flex-item");

    for (let i = 0; i < ele.length; i++) 
    {
        for (let j = 0; j < ele.length - i - 1; j++) 
        {
            ele[j].style.backgroundColor = "rgb(252, 255, 143)";
            ele[j + 1].style.backgroundColor = "rgb(255, 87, 87)";

            if ( parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height) ) 
            {
                await Wait(100 - document.getElementById("a_speed").value);
                swap(ele[j], ele[j + 1]);
            }

            ele[j].style.backgroundColor = "rgb(82, 82, 253)";
            ele[j + 1].style.backgroundColor = "rgb(82, 82, 253)";
        }
        ele[ele.length - i - 1].style.backgroundColor = "rgb(46, 163, 61)";
    }
    ele[0].style.backgroundColor = "rgb(46, 163, 61)";
    enable();
}
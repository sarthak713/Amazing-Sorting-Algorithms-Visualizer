import { disable, enable, Wait } from '../scripts/main';


function swap(i1, i2) 
{
    let temp = i1.style.height;
    i1.style.height = i2.style.height;
    i2.style.height = temp;
}

export default async function SelectionSort() 
{
    disable();
    const ele = document.querySelectorAll(".flex-item");
    const n = parseInt(ele.length);
    
    for(let i = 0; i < n-1; i++)
    {
        ele[i].style.backgroundColor = "rgb(255, 87, 87)";
        let indexOfMin = i;

        for(let j = i+1; j < n; j++)
        {
            ele[j].style.backgroundColor = "rgb(252, 255, 143)";
            await Wait(100 - document.getElementById("a_speed").value);

            if( parseInt(ele[j].style.height) < parseInt(ele[indexOfMin].style.height) )
            {
                if( indexOfMin !== i )
                {
                    ele[indexOfMin].style.backgroundColor = "rgb(82, 82, 253)";
                }
                indexOfMin = j;
            }
            else
            {
                ele[j].style.backgroundColor = "rgb(82, 82, 253)";
            }
        }

        swap( ele[indexOfMin], ele[i] );

        if( indexOfMin !== i )
        {
            ele[indexOfMin].style.backgroundColor = "rgb(255, 87, 87)";
            ele[i].style.backgroundColor = "rgb(255, 87, 87)";
            ele[indexOfMin].style.backgroundColor = "rgb(82, 82, 253)";
        }

        ele[i].style.backgroundColor = "rgb(46, 163, 61)";
    }

    for(let t = 0; t<n; t++)
    {
        ele[t].style.backgroundColor = "rgb(46, 163, 61)";
    }
    enable();
}
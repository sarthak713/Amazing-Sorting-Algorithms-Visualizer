import { disable, enable, Wait } from '../scripts/main';


export default async function InsertionSort() 
{
    disable();

    const ele = document.querySelectorAll(".flex-item");
    const n = parseInt(ele.length);
    
    for(var i = 0; i < n; i++)
    {
        ele[i].style.backgroundColor = "rgb(252, 255, 143)";
        var key=ele[i].style.height;
        var j=i-1;

        while( j>=0 && parseInt(ele[j].style.height) > parseInt(key) )
        {
            ele[j].style.backgroundColor = "rgb(255, 87, 87)";

            await Wait(100 - document.getElementById("a_speed").value);
            ele[j+1].style.height=ele[j].style.height;

            ele[j].style.backgroundColor = "rgb(82, 82, 253)";

            if(j===(i-1))
            {
                ele[j+1].style.backgroundColor = "rgb(252, 255, 143)";
            }
            else
            {
                ele[j+1].style.backgroundColor = "rgb(82, 82, 253)";
            }

            j-=1;
        }

        ele[j+1].style.height=key;

        for(var t = 0; t < i; t++)
        {
            ele[t].style.backgroundColor = "rgb(46, 163, 61)";
        }
    }

    ele[i-1].style.backgroundColor="rgb(46, 163, 61)";
    enable();
}
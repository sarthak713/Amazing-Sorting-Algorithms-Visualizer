import { disable, enable, Wait } from '../scripts/main';


function swap(i1, i2)
{
  let temp = i1.style.height;
  i1.style.height = i2.style.height;
  i2.style.height = temp;
}

async function partition(ele, l, r) 
{
  let i = l - 1;
  ele[r].style.background = "rgb(255, 87, 87)";

  for (let j = l; j <= r - 1; j++) 
  {
    ele[j].style.background = "rgb(252, 255, 143)";
    await Wait(100 - document.getElementById("a_speed").value);

    if ( parseInt(ele[j].style.height) < parseInt(ele[r].style.height) ) 
    {
      i++;
      swap(ele[i], ele[j]);

      ele[i].style.background = "rgb(255, 175, 89)";

      if (i !== j) 
      {
        ele[j].style.background = "rgb(255, 175, 89)"
      };

      await Wait(100 - document.getElementById("a_speed").value);

    } 
    else 
    {
      ele[j].style.background = "rgb(255, 102, 250)";
    }

  }
  i++;

  await Wait(100 - document.getElementById("a_speed").value);
  swap(ele[i], ele[r]);

  ele[r].style.background = "rgb(255, 102, 250)";
  ele[i].style.background = "rgb(46, 163, 61)";
  
  await Wait(100 - document.getElementById("a_speed").value);
  
  for (let k = 0; k < ele.length; k++) 
  {
    if (ele[k].style.background !== "rgb(46, 163, 61)") ele[k].style.background = "rgb(82, 82, 253)";
  }
  
  return i;
}
  
async function Quick(ele, l, r) 
{
  if (l < r) 
  {
    let pivot_index = await partition(ele, l, r);
    await Quick(ele, l, pivot_index - 1);
    await Quick(ele, pivot_index + 1, r);
  } 
  else 
  {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) 
    {
      ele[r].style.background = "rgb(46, 163, 61)";
      ele[l].style.background = "rgb(46, 163, 61)";
    }
  }
}
  
export default async function QuickSort() 
{
  const ele = document.querySelectorAll(".flex-item");
  disable();
  await Quick(ele, 0, ele.length - 1);
  enable();
}
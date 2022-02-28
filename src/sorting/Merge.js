import { disable, enable, Wait } from '../scripts/main';


async function merge(ele, low, mid, high) 
{
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);
  
    for (let i = 0; i < n1; i++) 
    {
      await Wait(100 - document.getElementById("a_speed").value);
      ele[low + i].style.background = "rgb(255, 175, 89)"; 
      left[i] = ele[low + i].style.height;
    }

    for (let i = 0; i < n2; i++) 
    {
      await Wait(100 - document.getElementById("a_speed").value);
      ele[mid + 1 + i].style.background = "rgb(252, 255, 143)";
      right[i] = ele[mid + 1 + i].style.height;
    }

    await Wait(100 - document.getElementById("a_speed").value);

    let i = 0,
        j = 0,
        k = low;

    while (i < n1 && j < n2) 
    {
      await Wait(100 - document.getElementById("a_speed").value);
  
      if ( parseInt(left[i]) <= parseInt(right[j]) )
      {
        if (n1 + n2 === ele.length) 
        {
          ele[k].style.background = "rgb(46, 163, 61)";
        } 
        else 
        {
          ele[k].style.background = "rgb(255, 87, 87)";
        }
  
        ele[k].style.height = left[i];
        i++;
        k++;
      } 
      else 
      {
        if (n1 + n2 === ele.length) 
        {
          ele[k].style.background = "rgb(46, 163, 61)";
        }
        else 
        {
          ele[k].style.background = "rgb(255, 87, 87)";
        }

        ele[k].style.height = right[j];

        j++;
        k++;
      }
    }

    while (i < n1) 
    {
      await Wait(100 - document.getElementById("a_speed").value);
      if (n1 + n2 === ele.length) 
      {
        ele[k].style.background = "rgb(46, 163, 61)";
      }
      else 
      {
        ele[k].style.background = "rgb(255, 87, 87)";
      }

      ele[k].style.height = left[i];

      i++;
      k++;
    }

    while (j < n2)
    {
      await Wait(100 - document.getElementById("a_speed").value);

      if (n1 + n2 === ele.length) 
      {
        ele[k].style.background = "rgb(46, 163, 61)";
      }
      else 
      {
        ele[k].style.background = "rgb(255, 87, 87)";
      }

      ele[k].style.height = right[j];

      j++;
      k++;
    }
}

  
async function MergeSort(ele, l, r) 
{
  if (l >= r) 
  {
    return;
  }

  const m = l + Math.floor((r - l) / 2);

  await MergeSort(ele, l, m);
  await MergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

export default async function mergeSort() 
{
  let ele = document.querySelectorAll(".flex-item");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disable();

  await MergeSort(ele, l, r);
  enable();
}
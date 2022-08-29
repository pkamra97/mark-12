const inputOne=document.querySelector(".input-1");
const inputTwo=document.querySelector(".input-2");
const output=document.querySelector("#out-put");
const calBtn=document.querySelector("#cal-btn");


function product(b , h)
{
const prd=b*h;
return prd;
}


function area()
{
    const area=(product(inputOne.value , inputTwo.value )/2);
    console.log(area);
    output.innerText="Area of triangle is "+area;
}

calBtn.addEventListener('click', area );
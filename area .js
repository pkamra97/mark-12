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
    if(inputOne.value>0 && inputTwo.value>0){
    const area=(product(inputOne.value , inputTwo.value )/2);
    console.log(area);
    output.innerText="Area of triangle is "+area;
    }
    else{
        output.innerText="Enter Both values and fill positive numbers only"
    }
}

calBtn.addEventListener('click', area );
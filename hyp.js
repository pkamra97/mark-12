const sides=document.querySelectorAll(".side-input");
const hypBtn=document.querySelector("#hyp-btn");
const outputE1=document.querySelector("#output")

function sumOfSquares(a,b)
{
const sos=a*a+b*b;
// console.log(sos);
return sos;
}

function cal_Hypotenuse()
{
    console.log("Neograds incoming");

    //Doubt this worked even without typecasting then why are we doing type casting
    const sum=sumOfSquares(Number(sides[0].value),Number( sides[1].value ));
    const hypto=Math.sqrt(sum);
    // console.log(hypto);
    outputE1.innerText="The length of hypotenuse is " +hypto;
}

hypBtn.addEventListener('click',cal_Hypotenuse);
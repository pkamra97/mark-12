const inputs=document.querySelectorAll(".angle-input")
const isTriangleBtn=document.querySelector("#is-btn-triangle")
const outputE1=document.querySelector("#output")

// //doubt1
// console.log(inputs);
// console.log(inputs[0]);
function calculateSum(angle1,angle2,angle3)
{
const sum=angle1+angle2+angle3; 
// console.log(sum);
return sum;
}
// doubt 2 console not printing sum value but in video it is working

function isTriangle(){
// const total=calculateSum(45,45,90);
// console.log(inputs[0].value,inputs[1].value,inputs[2].value);
const total=calculateSum(Number(inputs[0].value) , Number(inputs[1].value) , Number(inputs[2].value));
// console.log(total);
if(total===180)
{
    console.log("The angles form a triangle");
    outputE1.innerText="The angles form a triangle";
}
else{
    console.log("the angles don't form a triangle");
    outputE1.innerText="the angles don't form a triangle";
}

}

isTriangleBtn.addEventListener('click', isTriangle);

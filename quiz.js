const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#answer-btn");
const outputE1=document.querySelector("#output");

const correctAnswers=["90°","right angled","one right angle","14","e","85","30","a","a","c"];

function calScore()
{
    let score=0;
    let index=0;
    //doubt 3
    const formResults= new FormData(quizForm);
    // console.log(formResults);  
    // for(let entry of formResults.entries()){
    //     console.log(entry);
    // }
    // the above loop will give key value pairs of name and values in the form 

    for(let value of formResults.values()){
        console.log(value);
        // this will only return the values of the form that a user enters 
        if(value===correctAnswers[index])
        {
            score++;
        }
        index++;
    }
    console.log(score);
    outputE1.innerText="Your score is "+ score;
}

submitBtn.addEventListener('click',calScore);
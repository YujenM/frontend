const question = {
    data: [
        {
            statement: "'hello' === 'world'",
            answer: false,
            reason: "the strings 'hello' and 'world' are not the same."
        }, 
        {
            statement: "'apple' + 'banana' === 'applebanana'",
            answer: true,
            reason: "the concatenation of the strings 'apple' and 'banana' results in 'applebanana'."
        },
        {
            statement: "in javascript, arrays can only contain elements of the same type.",
            answer: false,
            reason: "javascript arrays can contain elements of different types, as they are dynamically typed."
        },
        {
            statement: "in javascript, strings are mutable (editable) values",
            answer: false,
            reason: "strings are immutable in javascript, which means their individual characters cannot be changed once the string is created"
        },
        
        {
            statement: "nan stands for 'not a number' in javascript",
            answer: true,
            reason: "nan is a special value representing an unrepresentable or undefined value resulting from an invalid mathematical operation, such as dividing zero by zero or trying to parse a non-numeric string"
        }, 
        {
            statement: "you can declare a variable with the same name as an existing variable in javascript",
            answer: true,
            reason: "in javascript, you can redeclare a variable with the same name using the 'var', 'let', or 'const' keyword, but this will shadow the original variable within the block scope"
        },
        {
            statement: "the '==' operator in javascript performs type coercion, while '===' does not",
            answer: true,
            reason: "the '==' operator in javascript compares values after converting them to a common type, while '===' checks both value and type for equality without any type conversion"
        },  
        {
            statement: "the 'use strict' directive enables strict mode in javascript",
            answer: true,
            reason: "strict mode helps developers write secure and cleaner code by throwing errors for common coding mistakes, such as using undeclared variables and assigning values to read-only properties"
        },  
        {
            statement: "the 'typeof' operator returns 'function' for functions in javascript.",
            answer: false,
            reason: "the 'typeof' operator returns 'function' for functions in javascript."
        }, 
        {
            statement: "you can define a multiline string (template literal) in javascript using backticks (`)",
            answer: true,
            reason: "template literals allow multiline strings in javascript without needing to manually concatenate multiple strings or use escape characters"
        },
        
        {
            statement: "the 'typeof' operator returns 'object' for null in javascript",
            answer: true,
            reason: "the 'typeof' operator returns 'object' for null, which is an unfortunate quirk in the language's design"
        },
        
        {
            statement: "you can directly compare two arrays for equality in javascript using '==' or '==='",
            answer: false,
            reason: "arrays are reference types in javascript, so '==' and '===' compare their references, not their contents. to check if the arrays have the same elements, you need to compare them element by element"
        },
        
        {
            statement: "the 'this' keyword in javascript refers to the current object within the scope of a function or method",
            answer: true,
            reason: "the 'this' keyword is dynamically scoped and its value depends on how a function is invoked. it allows access to the properties and methods of the object it belongs to"
        }
        
    ]
    };

let currentquestion=0;
let score=0

function display(){
    let dquestion=document.querySelector(".questiontext");
    dquestion.textContent=question.data[currentquestion].statement;
}
function checkanswer(istrue){
    const truebutton= document.querySelector(".true");
    const falsebutton=document.querySelector(".false");
    const answer=question.data[currentquestion].answer;
    if (istrue){
        if (istrue===answer){
            truebutton.style.backgroundColor = "green";
            score++
        }else{
            truebutton.style.backgroundColor = "red";
            const hint=document.querySelector(".hint");
            hint.textContent=question.data[currentquestion].reason;
        }
    }else{
        if (istrue===answer){
            falsebutton.style.backgroundColor = "green";
            score++;
        }else{
            falsebutton.style.backgroundColor = "red";
            const hint=document.querySelector(".hint");
            hint.textContent=question.data[currentquestion].reason;
        }
    }
    disable();
    nextquestion();
}
function checkbutton(){
    const truebutton= document.querySelector(".true");
    const falsebutton=document.querySelector(".false");
    truebutton.addEventListener("click",()=>checkanswer(true));
    falsebutton.addEventListener("click",()=>checkanswer(false));
}
function disable(){
    const truebutton= document.querySelector(".true");
    const falsebutton=document.querySelector(".false");
    truebutton.disabled=true;
    falsebutton.disabled=true;
}
function nextquestion(){
    const next=document.querySelector(".nextq");
    next.disabled=false;
}
function changequestion(){
    currentquestion++;
    if (currentquestion<question.data.length){
        display(); 
        reset()
    }else{
        let dquestion=document.querySelector(".questiontext");
        dquestion.textContent="Quiz Finished!";
        const scoreDisplay = document.createElement("div");
        scoreDisplay.textContent = "Your Score: " + score + "/" + question.data.length;
        dquestion.appendChild(scoreDisplay);
        quizfinished();
    }
}
function reset(){
    const truebutton= document.querySelector(".true");
    const falsebutton=document.querySelector(".false");
    const next=document.querySelector(".nextq");
    truebutton.removeAttribute("disabled");
    falsebutton.removeAttribute("disabled");
    next.disabled=true;
    const hint=document.querySelector(".hint");
    hint.textContent="";
    truebutton.style.backgroundColor = "slategrey";
    falsebutton.style.backgroundColor = "slategrey";
}
function clicknextquestion(){
    const next=document.querySelector(".nextq");
    next.addEventListener("click",changequestion);
}
function quizfinished(){
    const truebutton= document.querySelector(".true");
    const falsebutton=document.querySelector(".false");
    const hint=document.querySelector(".hint");
    const next=document.querySelector(".nextq");
    truebutton.style.display="none";
    falsebutton.style.display="none";
    hint.style.display="none";
    next.style.display="none";
    // next.textContent="Take the quiz again"

}
function init(){
    display();
    checkbutton();
    clicknextquestion();
}

init();

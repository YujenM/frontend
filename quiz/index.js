const question = {
    data: [
        {
            statement: "'hello' + 'world' === 'helloworld'",
            answer: true,
            reason: "the concatenation of the strings 'hello' and 'world' results in 'helloworld'."
        }, 
        {
            statement: "'apple' + 'banana' === 'applebanana'",
            answer: true,
            reason: "the concatenation of the strings 'apple' and 'banana' results in 'applebanana'."
        },
        {
            statement: "'42' + '7' === '427'",
            answer: true,
            reason: "the concatenation of the strings '42' and '7' results in '427'."
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
            statement: "the result of '5' + 3 in javascript is '53'",
            answer: true,
            reason: "the '+' operator performs string concatenation when at least one operand is a string. in this case, '5' is treated as a string, and the number 3 is implicitly converted to a string, resulting in '53'"
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

let anotherquestion=0;
// disable button
function disable(){
    const right=document.querySelector(".true");
    const wrong=document.querySelector(".false");
    // remove event listeners from buttons to prevent multiple clicks on same option
    right.setAttribute("disabled","")
    wrong.setAttribute("disabled","")
    
}

// function for dsplaying question
function displayquestion(){
    const dquestion = document.querySelector(".questiontext");
    dquestion.textContent=question.data[anotherquestion].statement;
    
}

function checkanswer(){
    const right=document.querySelector(".true");
    const wrong=document.querySelector(".false");
    const answer=question.data[anotherquestion].answer.toString();
    const hint=document.querySelector(".hint");
    right.addEventListener("click",()=>{
        if (right.name===answer){
            debugger;
            right.style.cssText="background-color:green;"
            disable()
            next()
            
        }else{
            debugger;
            right.style.cssText="background-color:red;"
            hint.textContent=question.data[anotherquestion].reason;
            disable()
            next()
            
        }
    })
    wrong.addEventListener("click",()=>{
        if (wrong.name===answer){
            debugger;
            wrong.style.cssText="background-color:green;"
            disable()
            next()
            
        }else{
            debugger;
            wrong.style.cssText="background-color:red;"
            hint.textContent=question.data[anotherquestion].reason;
            disable()
            next()
            
        }
    })
}
function reset(){
    const right=document.querySelector(".true");
    const wrong=document.querySelector(".false");
    const hint=document.querySelector(".hint");
    right.style.cssText="background-color:slategrey;";
    wrong.style.cssText="background-color:slategrey;"
    right.removeAttribute("disabled");
    wrong.removeAttribute("disabled");
    hint.textContent="";
    let nextquestion=document.querySelector(".nextq");
    nextquestion.setAttribute("disabled","");
}
function next(){
    debugger;
    const nextquestion=document.querySelector(".nextq");
    nextquestion.removeAttribute("disabled")
    nextquestion.addEventListener("click",()=>{
        anotherquestion=anotherquestion+1;
        console.log(anotherquestion);
        displayquestion();
        debugger;
        reset()
        debugger;
    })
}

displayquestion();
checkanswer();
debugger;

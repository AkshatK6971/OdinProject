function add(a,b){
    return Math.round((parseFloat(a)+parseFloat(b)) * 100) / 100;
}

function subtract(a,b){
    return Math.round((parseFloat(a)-parseFloat(b)) * 100) / 100;
}

function multiply(a,b){
    return Math.round((parseFloat(a)*parseFloat(b)) * 100) / 100;
}

function divide(a,b){
    if(b==0){
        alert("Go back to nursery noob.");
        return "";
    }
    else{
        return Math.round((parseFloat(a)/parseFloat(b)) * 100) / 100;
    }
}

function operate(number1,number2,operator){
    let result;
    switch(operator){
        case "+":
            result = add(number1,number2);
            break;
        case "-":
            result = subtract(number1,number2);
            break;
        case "*":
            result = multiply(number1,number2);
            break;
        case "/":
            result = divide(number1,number2);
            break;
    }
    return result;
}

let number1 = "";
let operator = null;
let number2 = "";
let display = document.querySelector(".display");

let number_list = document.querySelectorAll(".numerical").forEach(function(number_choice){
    number_choice.addEventListener("click", function(e1){
        if(operator == null){
            if(number1.length <= 7){
                number1 += e1.target.id;
                display.textContent = number1;
            }
        }
        else{
            if(number2.length <= 7){
                number2 += e1.target.id;
                display.textContent = number2;
            }
        }
    });       
});

let operator_list = document.querySelectorAll(".operator").forEach(function(operator_choice){
    operator_choice.addEventListener("click", function(e2){
        if(number1 == ""){
            number1 = display.textContent;
        }
        if(number2 != ""){
            let temp = operate(number1,number2,operator);
            number1 = "" + temp;
            number2 = "";
            if(number1 == ""){
                display.textContent = "0";
            }
            else{
                display.textContent = number1;
            }
            if(e2.target.id == "="){
                number1 = "";
                operator = null;
            }
            else{
                operator = e2.target.id;
            }
        }
        else{
            operator = e2.target.id;
        }
    });
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operator = null;
    display.textContent = "0";
});

let percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    let temp;
    if(operator == null){
        if(number1 == ""){
            number1 = display.textContent;
        }
        temp = divide(number1,100);
        number1 = "" + temp;
        display.textContent = number1;
    }
    else{
        if(number2 != ""){
            temp = divide(number2,100);
            number2 = "" + temp;
            display.textContent = number2;
        }
        else{
            temp =  divide(number1,100);
            number1 = "" + temp;
            display.textContent = number1;
        }
    }
});

let sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    if(operator == null){
        if(number1 == ""){
            number1 = display.textContent;
        }
        number1 = "" + Math.round((parseFloat(number1) * (-1)) * 100) /100;
        display.textContent = number1;
    }
    else{
        if(number2 != ""){
            number2 = "" + Math.round((parseFloat(number2) * (-1)) * 100) /100;
            display.textContent = number2;
        }
        else{
            number1 = "" + Math.round((parseFloat(number1) * (-1)) * 100) /100;
            display.textContent = number1;
        }
    }
});

let decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if(operator == null){
        if(number1 == ""){
            number1 = display.textContent;
        }
        if(!number1.includes(".")){
            number1 += ".";
        }
        display.textContent = number1;
    }
    else{
        if(number2 != ""){
            if(!number2.includes(".")){
                number2 += ".";
            }
            display.textContent = number2;
        }
        else{
            if(!number1.includes(".")){
                number1 += ".";
            }
            display.textContent = number1;
        }
    }
});
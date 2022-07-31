let display = '';
let op = '';
let num2 = 0;
let opClicked = false;


setDisplay('0')

//Calculator functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operation, num1, num2){
    let abvOp = operation.toLowerCase();
    let val = 0;
    if(abvOp == 'add')
    {
        val = add(num1,num2);
        setDisplay(val);
        return val;
    }
    else if(abvOp == 'subtract')
    {
        val = subtract(num1,num2);
        setDisplay(val);
        return val;
    }
    else if(abvOp == 'multiply')
    {
        val = multiply(num1,num2);
        setDisplay(val);
        return val;
    }
    else if(abvOp == 'divide')
    {
        val = divide(num1,num2)
        setDisplay(val);
        return val;
    }
}

function clear(){
    display = '';
    setDisplay('0');
    opClicked = false;
    num2 = 0;
}

//Wiring buttons to JS
function setDisplay(str){
    const disp = document.querySelector('.display');
    disp.textContent = str;
}

const btns = document.querySelectorAll('.ops');
btns.forEach((btn) => btn.addEventListener('click', function(e){
    let allClasses = e.target.className;
    let classesArr = allClasses.split(' ');
    let firstClass = classesArr[0];
    if(isNaN(firstClass) == false && opClicked == false)
    {
        display += firstClass;
        setDisplay(display);
    }
    else if(isNaN(firstClass) && opClicked == false)
    {
        opClicked = true;
        op = firstClass;
    }
    else if(display != '' && opClicked && isNaN(firstClass) == false){
        num2 += parseInt(firstClass);
        console.log(num2);
    }
    else if(opClicked && firstClass == 'equals')
    {
        display = operate(op, parseInt(display), num2);
        opClicked = false;
        op = '';
        num2 = 0;
    }
    else if(opClicked && isNaN(firstClass)){
        console.log('operation of '+ op);
        display = operate(op, parseInt(display), num2);
        console.log('display ' + display);
        op = firstClass;
        console.log('updated operation '+ op);
        num2 = 0;
    }
    }))


const clr = document.querySelector('.clear')
clr.addEventListener('click', clear);


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
    if(abvOp == 'add')
    {
        console.log(add(num1,num2));
    }
    else if(abvOp == 'subtract')
    {
        console.log(subtract(num1,num2));
    }
    else if(abvOp == 'multiply')
    {
        console.log(multiply(num1,num2));
    }
    else if(abvOp == 'divide')
    {
        console.log(divide(num1,num2));
    }
}
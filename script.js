const number = document.querySelectorAll('.number');
const answer = document.getElementById('answer');
const symbol = document.querySelectorAll('.symbol');
const calcString = document.getElementById('currentCalc');
var firstNum = 0;
var secondNum = 0;
var operator = '';
var problemHistory = [];

const add = function(...args) {
    let answer = args[0];
    for (let i = 1; i < args.length; i++) {
        answer += args[i];
    }
    return answer;
}

const multiply = function(...args) {
    let answer = args[0];
    for (let i = 1; i < args.length; i++) {
        answer *= args[i];
    }
    return answer;
}

const subtract = function(...args) {
    let answer = args[0];
    for (let i = 1; i < args.length; i++) {
        answer -= args[i];
    }
    return answer;
}

const divide = function(...args) {
    let answer = args[0];
    for (let i = 1; i < args.length; i++) {
        answer /= args[i];
    }
    return answer;
}

const percent = function(arg) {
    return (arg * .01)
}

const cButton = function() {
    answer.innerHTML = '';
}

const square = function(num) {
    return (num * num);
}

const calculate = function(func, num1, num2) {
    return func(num1, num2);
}

const getOperation = function(operator) {

    switch (operator) {
        case '%':
            return percent(firstNum);
            break;
        case 'Sq':
            return square(firstNum);
            break;
        case '*':
            return multiply(firstNum, secondNum);
            break;
        case '-':
            return subtract(firstNum, secondNum);
            break;
        case '+':
            return add(firstNum, secondNum);
            break;
        case '/':
            return divide(firstNum, secondNum);
            break;
        case 'C':
            return cButton(firstNum, secondNum);
            break;
        case 'Calc':
            return calculate(firstNum, secondNum);
            break;
    }
}

number.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        let divNumb = numb.innerHTML;
        answer.innerHTML += divNumb;
        secondNum = parseFloat(answer.innerHTML);
    });
});

symbol.forEach((sign) => {
    sign.addEventListener('click', (e) => {
        if (firstNum === 0) {
            firstNum = secondNum;
            operator = sign.innerHTML;
            calcString.innerHTML += firstNum + operator;
            answer.innerHTML = '';
            problemHistory.push(secondNum, operator);
        } else {
            firstNum = getOperation(operator);
            operator = sign.innerHTML;
            calcString.innerHTML = firstNum;
            answer.innerHTML = '';
            problemHistory.push(secondNum, ' = ', firstNum, operator);
        }
    });
});




const number = document.querySelectorAll('.number');
const answer = document.getElementById('answer');
const symbol = document.querySelectorAll('.symbol');
const calcString = document.getElementById('currentCalc');
const special = document.querySelectorAll('.special');
var firstNum = 0;
var secondNum = 0;
var operator = '';
var problemHistory = [];
var calcResult = 0;

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
    return secondNum = 0;
}

const square = function(firstNum) {
    return (firstNum * firstNum);
}

const calculate = function() {
    secondNum = firstNum;
    firstNum = 0;
    return secondNum;
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
        case 'Calc':
            return calculate(firstNum, secondNum);
            break;
        case 'C' :
            return cButton();
            break;
    }
}

number.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        if (firstNum === 0) {
            let divNumb = numb.innerHTML;
            answer.innerHTML = divNumb;
            firstNum = parseFloat(answer.innerHTML);
        } else if (firstNum !== 0 && secondNum == 0) {
        let divNumb = numb.innerHTML;
        answer.innerHTML = divNumb;
        secondNum = parseFloat(answer.innerHTML);
        } else {
            let divNumb = numb.innerHTML;
            answer.innerHTML += divNumb;
            secondNum = parseFloat(answer.innerHTML);
        }
        
        });
    });

symbol.forEach((sign) => {
    sign.addEventListener('click', (e) => {
        if (firstNum === 0) {
            if (secondNum !== 0) {
                operator = sign.innerHTML
                firstNum = calcResult;
                calcString.innerHTML = firstNum + ' ' + operator;
            } else {
            operator = sign.innerHTML;
            firstNum = getOperation(operator);
            calcString.innerHTML += firstNum;
            answer.innerHTML = '';
            problemHistory.push(secondNum, operator);
            }
        } else 
        if (firstNum !== 0 && secondNum !==0) {
            firstNum = getOperation(operator);
            operator = sign.innerHTML;
            if (operator == 'Calc') {
                calcString.innerHTML = firstNum;
                calcResult = firstNum;
                firstNum = 0;
            } else {
            calcString.innerHTML = firstNum + ' ' + operator;
            }
            answer.innerHTML = '';
            problemHistory.push(secondNum, ' = ', firstNum, operator);
        } else {
            operator = sign.innerHTML;
            if (operator == 'Calc') {
                calcString.innerHTML = firstNum;
                firstNum = 0;
            } else {
            calcString.innerHTML = firstNum + ' ' + operator;
            }
            answer.innerHTML = '';
        }
    });
});

special.forEach((spec) => {
    spec.addEventListener('click', (e) => {
        operator = spec.innerHTML;
        if (secondNum !== 0) {
        secondNum = getOperation(operator);
        calcString.innerHTML = firstNum;
        } else {
        firstNum = getOperation(operator);
        calcString.innerHTML = firstNum;
        };
    });
});




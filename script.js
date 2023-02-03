const number = document.querySelectorAll('.number');
const answer = document.getElementById('answer');
const symbol = document.querySelectorAll('.symbol');
const calcString = document.getElementById('currentCalc');
const clear = document.querySelector('.clear');
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
    secondNum = '';
    return answer.innerHTML = 0;

}

const square = function(num) {
    return (num * num);
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
    }
}

number.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        if (firstNum == 0) {
            let divNumb = numb.innerHTML;
            answer.innerHTML = divNumb;
            firstNum = parseFloat(answer.innerHTML);
        } else if (firstNum != 0 && secondNum == 0) {
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
            operator = sign.innerHTML;
            calcString.innerHTML += firstNum + ' ' + operator;
            answer.innerHTML = '';
            problemHistory.push(secondNum, operator);
        } else 
        if (firstNum !== 0 && secondNum !==0) {
            firstNum = getOperation(operator);
            operator = sign.innerHTML;
            if (operator == 'Calc') {
                calcString.innerHTML = firstNum;
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

clear.addEventListener('click', (cButton));




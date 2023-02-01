const number = document.querySelectorAll('.number');
const answer = document.getElementById('answer');
const symbol = document.querySelectorAll('.symbol');
var firstNum = 0;

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
    return 0;
}

const square = function(num) {
    return (num * num);
}

const calculate = function(func, num1, num2) {
    return func(num1, num2);
}

const getOperation = function(symbol) {
    let func = symbol;
    switch (symbol) {
        case '%':
            func = percent;
            break;
        case 'Sq':
            func = square;
            break;
        case '*':
            func = multiply;
            break;
        case '-':
            func = subtract;
            break;
        case '+':
            func = add;
            break;
        case '/':
            func = divide;
            break;
        case 'C':
            func = cButton;
            break;
        case 'Calc':
            func = calculate;
            break;
    }
}

number.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        let divNumb = numb.innerHTML;
        answer.innerHTML += divNumb;
    });
});

symbol.forEach((sign) => {
    sign.addEventListener('click', (e) => {
        //var active = document.querySelectorAll('.clicked');
        sign.classList.add('clicked'); 
        firstNum = document.getElementById('answer').innerHTML

    });
});
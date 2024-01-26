let first_num;
let second_num;
let operator;

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(first_num, second_num, operator) {
    if (operator === "+") {
        add(first_num, second_num)
    }

    else if (operator === "-") {
        subtract(first_num, second_num)
    }

    else if (operator === "*") {
        multiply(first_num, second_num)
    }

    else if (operator === "/") {
        divide(first_num, second_num)
    }

    else {

    }
}



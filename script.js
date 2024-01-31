let first_num;
let second_num;
let operator;
let operation = undefined;

const display = document.querySelector("#display");
const clearButton = document.querySelector("#clearButtonAction");
const btn = document.querySelectorAll(".button")
let arr = []


function add(a, b) {
    return parseInt(a) + parseInt(b)
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
        answer_display(add(first_num, second_num))
    }

    else if (operator === "-") {
        answer_display(subtract(first_num, second_num))
    }

    else if (operator === "*") {
        answer_display(multiply(first_num, second_num))
    }

    else if (operator === "/") {
        answer_display(divide(first_num, second_num))
    }

    else {
        answer_display("Not working :-(")
    }
}

function change_display(input) {
    display.innerText += input;
}

function answer_display(input) {
    display.innerText = input;
}

function firstNumber(input) {
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operation = input
        first_num = display.textContent
        clearNumbers()
        change_display(input)
        return operation
    }

    else {
        change_display(input)
        return undefined
    }
}

function secondNumber(input) {
    if (input === "=") {
        second_num = display.textContent
        clearNumbers()
        solveEquation(input)
    }
    else {
        change_display(input)
    }
}

function solveEquation(input) {
    if (operation === undefined || second_num === undefined) {
        alert("You do not have the needed items to run this program! Try again!");
        clearNumbers();
    }
    else if (operation === "/" && second_num === "0") {
        alert("Please do not try to divide by zero! Try again!");
        clearNumbers();
    }

    else if (operation === "" || second_num === "") {
        alert("You do not have the needed items to run this program! Try again!");
        clearNumbers();
    }

    else {
        change_display(input)
        console.log(first_num, second_num, operation)
        operate(first_num, second_num, operation)
    }
}

function deleteOperator() {
    if (display.textContent === "+"
        || display.textContent === "-"
        || display.textContent === "/"
        || display.textContent === "*") {
        clearNumbers()
    }
}

function equationCreator(input) {
    if (first_num === undefined) {
        operation = firstNumber(input)

    }

    else if (second_num === undefined) {
        deleteOperator()
        secondNumber(input)
    }

}



function clearNumbers() {
    display.innerText = " "
}

btn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        equationCreator(this.value)
    })
})

clearButton.addEventListener("click", function () {
    clearNumbers()
});

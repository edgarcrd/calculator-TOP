const add = (n1, n2) => {
  return n1 + n2;
}

//console.log(add(5, 2))

const substract = (n1, n2) => {
  return n1 - n2;
}

const multiply = (n1, n2) => {
  return n1 * n2;
}

const divide = (n1, n2) => {
  return n1 / n2;
}

let n1 = 0;
let n2 = 0;
let operator = '';

const operate = (n1, op, n2) => {
  let result = 0;
  if (op === '+') {
    result = add(n1, n2);
  } else if (op === '-') {
    result = substract(n1, n2);
  } else if (op === '*') {
    result = multiply(n1, n2)
  } else {
    result = divide(n1, n2)
  }
  return result;
}

const display = document.querySelector(".display")

const buttons = document.querySelectorAll("button")

let accum = ''
let num1 = ""
let num2 = ""
let n = ""
let op = ''
let total = 0

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //alert(button.textContent)
    let res = button.textContent;
    console.log(res)
    num = Number(res);
    if ((num >= 0 && num <= 9) || res === ".") {
      if (op === '=') {
        accum = ""
        total = 0;
      }
      accum = accum + res
      n = n + res
      display.textContent = accum;
    }

    if (res === '+' || res === '-' || res === '*' || res === '/') {
      if (op === "" || op === '=') {
        console.log('hey')
        op = res;
        accum = accum + res
        total = Number(n) + total
        n = ''
        display.textContent = accum
      } else if (op !== "" && n !== ''){
        temp = Number(n)
        total = operate(total, op, temp)
        display.textContent = total
        op = res
        accum = ''
        n = ''
      } else {
        display.textContent = accum
      }
    } else if (res === '=') {
      if (op === '' || n === '') {
        display.textContent = accum
      } else if (op !== '' && n !== ''){
        temp = Number(n)
        total = operate(total, op, temp)
        op = "="
        display.textContent = total
        n = ''
        accum = total.toString();
      }
    } else if (res === 'AC') {
      accum = ''
      total = 0
      n = ''
      op = ''
      display.textContent = total
    }

  })
})
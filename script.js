const add = (n1, n2) => {
  return n1 + n2;
}

console.log(add(5, 2))

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


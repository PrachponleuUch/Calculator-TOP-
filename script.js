//number2 is for taking input, then store that input into number1 and take another input for number2
//op is for storing operation input
function add(a, b){
  number1 = a + b;
  number2 = '';
  output.textContent = a + b;
}

function subtract(a, b){
  number1 = a - b;
  number2 = '';
  output.textContent = a - b;
}

function multiply(a, b){
  number1 = a * b;
  number2 = '';
  output.textContent = a * b;
}

function divide(a, b){
  number1 = a / b;
  number2 = '';
  output.textContent = a / b;
}

function operate(a, b, op){
  a = Number(a);
  b = Number(b);

  switch(op){
    case "add":
      add(a,b);
      op = '';
      break;
    case "subtract":
      subtract(a,b);
      op = '';
      break;
    case "multiply":
      multiply(a,b);
      op = '';
      break;
    case "divide":
      divide(a,b);
      op = '';
      break;  
  }
}

function operatorCheck(){
  if(op === 'equal')
  {
    output.textContent = number1;
  }
  else if(op){
    operate(number1, number2, op);
  }
  else{
    number1 = number2;
    number2 = '';
  }
}


let numberBtns = document.querySelectorAll('.number');
let output = document.querySelector('h1');
let reset = document.querySelector('#reset');
let operators = document.querySelectorAll('.operator');
let negate = document.querySelector('#negate');
let percent = document.querySelector('#percent');
let dot = document.querySelector('#dot');
let number1 = localStorage.number1 = '';
let number2 = localStorage.number2 = '';
let op = localStorage.op = '';

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener('click', () => {
      number2 += numberBtn.value;
      output.textContent = number2;
  })
});

reset.addEventListener('click', (e) => {
  localStorage.clear();
  number1 = '';
  number2 = '';
  op = '';
  output.textContent = '';
});

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    operatorCheck();
    op = operator.value;
  })
})

negate.addEventListener('click', (e) => {
  
  if(!(number2)) { 
    number1 = (-(Number(number1))).toString();
    output.textContent = number1;
  }
  else {  
    number2 = (-(Number(number2))).toString();
    output.textContent = number2;
  }
})

percent.addEventListener('click', (e) => {
  
  if(!(number2)) { 
    number1 = ((Number(number1))/100).toString();
    output.textContent = number1;
  }
  else {  
    number2 = ((Number(number2))/100).toString();
    output.textContent = number2;
  }
})

dot.addEventListener('click', (e) => {
  
  if(!(number2)) { 
    if (!(number1.includes('.'))) 
    {  
      number1 = number1 + '.';
    } 
    output.textContent = number1;
  }
  else {  
    if (!(number2.includes('.'))) 
    {  
      number2 = number2 + '.';
    } 
    output.textContent = number2;
  }
})

document.addEventListener("keydown", function(e) {
  
  if (e.key === "Backspace") {
    if(!(number2)) { 
      number1 = number1.slice(0, -1);
      output.textContent = number1;
    }
    else {   
      number2 = number2.slice(0, -1);
      output.textContent = number2;
    }
  }
});
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
  
}

function divide(a, b){
  
}

function operate(a, b, op){
  a = parseInt(a);
  b = parseInt(b);
  switch(op){
    case "add":
      add(a,b);
      op = '';
      break;
    case "subtract":
      subtract(a,b);
      op = '';
      break;
  }
}


let numberBtns = document.querySelectorAll('.number');
let output = document.querySelector('h1');
let reset = document.querySelector('#reset');
let additionBtn = document.querySelector('#add');
let subtractBtn = document.querySelector('#subtract');
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
  e.preventDefault();
  localStorage.clear();
  number1 = '';
  number2 = '';
  op = '';
  output.textContent = '';
});

additionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // If an operator has been click once before, do the operation.
  if(op){
    operate(number1, number2, op)
  }
  // Else push the value from number2 to number1
  else{
    number1 = number2;
    number2 = '';
  }
  op = additionBtn.value;
})

subtractBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // If an operator has been click once before, do the operation.
  if(op){
    operate(number1, number2, op)
  }
  // Else push the value from number2 to number1
  else{
    number1 = number2;
    number2 = '';
  }
  op = subtractBtn.value;
})
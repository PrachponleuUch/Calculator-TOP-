function add(a, b){

}

function subtract(a, b){
  
}

function multiply(a, b){
  
}

function divide(a, b){
  
}
let player;
let numberBtns = document.querySelectorAll('.number');
let output = document.querySelector('h1');
let reset = document.querySelector('#reset');
localStorage.number1 = '';
localStorage.number2 = '';
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener('click', () => {
      localStorage.number1 += numberBtn.value;
      output.textContent = localStorage.number1;
  })
});

reset.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  localStorage.number1 = '';
  localStorage.number2 = '';
  output.textContent = '';
});

"use strict";

//main DOM and RAM elements:
var h1 = document.getElementById('fibo');
h1.innerText = 'Fibonacci Calculator';
var form = document.getElementById('form');
var mainBtn = document.getElementById('main-btn');
var input = document.getElementById('inlineFormInputGroupUsername');
var resultH1 = document.getElementById('fibo-result');
var fibonacciArrTwo = []; //milestones #2 + #3:

mainBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  resultH1.style.fontSize = '';
  userInput = input.value;
  localStorage.setItem("userInput:", "".concat(userInput));
  userInputNum = parseInt(userInput);

  if (userInputNum < 0 || userInputNum > 102) {
    alert('New feature - Can calculate from 0 and up to 102! Next week we might shrink it back to 51... :P');
  } else if (userInputNum > 39) {
    resultH1.style.fontSize = 'large';
    resultH1.innerText = calcFibonacci(userInputNum);
  } else if (userInputNum > 78) {
    resultH1.style.fontSize = 'xx-small';
    resultH1.innerText = calcFibonacci(userInputNum);
  } else {
    resultH1.innerText = calcFibonacci(userInputNum);
  }
});

function calcFibonacci(fetchedUserInputNum) {
  var fibonacciArrTwo = [0, 1];

  if (fetchedUserInputNum > 1) {
    var fiboNum1 = fibonacciArrTwo[0];
    var fiboNum2 = fibonacciArrTwo[1];
    var fiboNextNum;

    for (var i = 2; i <= fetchedUserInputNum; i++) {
      fiboNextNum = fiboNum1 + fiboNum2; //the sequence's formula

      fiboNum1 = fiboNum2; //adjust the variables for the next iteration

      fiboNum2 = fiboNextNum;
      fibonacciArrTwo.push(fiboNextNum);
    }

    return fibonacciArrTwo[fetchedUserInputNum];
  } else return fibonacciArrTwo[fetchedUserInputNum];
}
var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input-form');
var elButton = document.querySelector('.button');
var elResult = document.querySelector('.result');
var elResultTwo = document.querySelector('.result-two');
var elResultThree = document.querySelector('.result-three');

var BY_FOOT = 20;
var BY_BICICLE = 10;
var BY_CAR = 5;

elForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var inputNumber = parseInt(elInput.value.trim(), 10)

  var message = BY_FOOT * inputNumber;
  var message2 = BY_BICICLE * inputNumber;
  var message3 = BY_CAR * inputNumber;

  function calculateHour(minute) {
    if (minute >= 60) {
      minute = (minute / 60).toFixed(2);
      return minute + 'hour';
    } else {
      return minute + 'Min';
    }
  }

  elResult.textContent = calculateHour(message);
  elResultTwo.textContent = calculateHour(message2);
  elResultThree.textContent = calculateHour(message3);
});
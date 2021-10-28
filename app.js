let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let h2 = document.getElementsByTagName('h2')[0];
let count = 0;
let output = document.getElementsByClassName('attempts')[0];
let guesses = document.getElementsByClassName('guesses')[0];
let submitBtn = document.getElementById('submit');
let input = document.getElementById('input');

function checkGuess() {
  let guessNum = input.value;
  if (guessNum == randomNum) {
    h2.innerHTML = `Congratulations, you have guessed, it's ${guessNum}`;
    count++;
    guesses.innerText += ` ${guessNum}`;
    output.innerText = `Total attempts : ${count}`;
    input.value = '';
  }
  if (guessNum > randomNum) {
    h2.innerText = 'Down!';
    count++;
    guesses.innerText += ` ${guessNum}`;
    output.innerText = `Number of attempts: ${count}`;
    input.value = '';
  }
  if (guessNum < randomNum) {
    h2.innerText = 'Up!';
    count++;
    guesses.innerText += ` ${guessNum}`;
    output.innerText = `Number of attempts: ${count}`;
    input.value = '';
  }
  if (guessNum > 100 || guessNum <= 0) {
    alert('Invalid number.. Please enter a number between 1 and 100');
    input.value = '';
  }
}

submitBtn.addEventListener('click', checkGuess);

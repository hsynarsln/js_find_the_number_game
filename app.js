let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let h2 = document.getElementsByTagName('h2')[0];
let count = 0;
let output = document.getElementsByClassName('attempts')[0];
let guesses = document.getElementsByClassName('guesses')[0];
let submitBtn = document.getElementById('submit');

function checkGuess() {
  let guessNum = document.querySelector('#guess').value;
  if (guessNum == randomNum) {
    h2.innerHTML = `Congratulations, you have guessed, it's ${guessNum}`;
    count++;
    guesses.innerText += ` ${guessNum}`;
    output.innerText = `Total attempts : ${count}`;
  }
  if (guessNum > randomNum) {
    h2.innerText = 'Down!';
    count++;
    guesses.innerText += ` ${guessNum}`;
    output.innerText = `Number of attempts: ${count}`;
  }
  if (guessNum < randomNum) {
    h2.innerText = 'Up!';
    count++;
    guesses.innerText += ` ${guessNum}`;
    output.innerText = `Number of attempts: ${count}`;
  }
}

submitBtn.addEventListener('click', checkGuess);

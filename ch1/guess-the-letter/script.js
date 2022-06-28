import Debugger from '../debugger.js';

const canvasApp = () => {
  let guesses = 0;
  let message = 'Guess The Letter From a (lower) to z (higher)';
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const today = new Date();
  let letterToGuess = '';
  let lettersGuessed = [];
  let higherOrLower = '';
  let gameOver = false;
  let letterIndex = 0;
  let guessIndex = 0;
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    // background
    context.fillStyle = '#ffa';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // square
    context.strokeStyle = '#000';
    context.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
    context.textBaseline = 'top';

    // date
    context.fillStyle = '#000';
    context.font = '10px _sans';
    context.fillText(today, 150, 10);

    // message
    context.fillStyle = '#f00';
    context.font = '14px _sans';

    // guess
    context.fillStyle = '#109910';
    context.font = '16px _sans';
    context.fillText('Guess: ' + guesses, 215, 50);
    // higher or lower

    context.fillStyle = '#000';
    context.font = '16px _sans';
    context.fillText('Higher Or Lower: ' + higherOrLower, 150, 125);

    // guess char
    context.fillStyle = '#f00';
    context.font = '16px _sans';
    context.fillText('Letters Guessed: ' + lettersGuessed.toString(), 10, 260);

    if (!gameOver) return;

    context.fillStyle = '#f00';
    context.font = '40px _sans';
    context.fillText('You Gout It!', 150, 180);
  };

  const keyPressed = (e) => {
    if (gameOver) return;

    const letterPressed = e.key;
    guesses += 1;

    lettersGuessed.push(letterPressed);
    if (letterPressed === letterToGuess) {
      gameOver = true;
    }
    letterIndex = letters.indexOf(letterToGuess);
    guessIndex = letters.indexOf(letterPressed);

    if (guessIndex < 0) {
      message = 'That is not a letter';
    }

    higherOrLower = guessIndex > letterIndex ? 'Lower' : 'Higher';

    drawScreen();
  };

  const initGame = () => {
    letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];

    window.addEventListener('keyup', keyPressed, true);
    drawScreen();
  };

  initGame();
};
const eventWindowLoaded = () => canvasApp();
window.addEventListener('load', eventWindowLoaded, false);

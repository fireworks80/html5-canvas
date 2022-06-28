import Debugger from '../debugger.js';

const eventWindowLoaded = () => canvasApp();
const canvasApp = () => {
  // 참가자가 문자를 누른 횟수 (적을 수록 잘하는 것)
  let guesses = 0;
  // 게임 방법 설명
  const message = 'Guess The Letter From a (lower) to z (higher)';
  // 게임의 정답을 임의로 고를때 사용, 알파벳 문자의 상대적 위치를 알아낼때도 사용
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
  // 참가자가 맞춰야 하는 정답 문자
  let letterToGuess = '';
  // 참가자가 추측한 문자와 정답 문자를 비교한 결과에 따리 higher, lower문자열을 갖는다
  // 정답이 추측한 문자보다 'a'쪽에 있다면 lower, z쪽에 있다면 higher를 갖는다.
  let higherOrLower = '';
  // 배열, 참가자가 이미 추측했던 문자를 저장, 참가자가 이미 추측했던 문자가 무엇인지 기억하기
  // 쉽도록 화면에 letterGuessed배열을 출력
  let lettersGuessed;
  let gameOver = false;
  let letterIndex = 0;
  let guessIndex = 0;

  const theCanvas = document.querySelector('#canvas-one');
  const context = theCanvas.getContext('2d');

  const initGame = () => {
    letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];

    guesses = 0;
    lettersGuessed = [];
    gameOver = false;

    window.addEventListener('keyup', eventKeyPressed, true);
    const formEl = document.querySelector('form button');
    formEl.addEventListener('click', createImageDataPressed, false);
    drawScreen();
  };

  const eventKeyPressed = (e) => {
    if (gameOver) return;

    let letterPressed = String.fromCharCode(e.keyCode);
    letterPressed = letterPressed.toLowerCase();
    guesses += 1;
    lettersGuessed.push(letterPressed);

    if (letterPressed === letterToGuess) {
      gameOver = true;
    }

    letterIndex = letters.indexOf(letterToGuess);
    guessIndex = letters.indexOf(letterPressed);
    Debugger.log(guessIndex);

    if (guessIndex < 0) {
      higherOrLower = 'That is not a letter';
    }

    higherOrLower = guessIndex > letterIndex ? 'Lower' : 'Higher';
    drawScreen();
  };
  const drawScreen = () => {
    // 배경화면
    context.fillStyle = '#ffffaa';
    context.fillRect(0, 0, 500, 300);

    //square
    context.strokeStyle = '#000';
    context.strokeRect(5, 5, 490, 290);
    context.textBaseline = 'top';

    // date
    context.fillStyle = '#000';
    context.font = '10px _sans';
    context.fillText(today, 150, 10);

    //message
    context.fillStyle = '#f00';
    context.font = '14px _sans';
    context.fillText(message, 125, 30);

    // 추측
    context.fillStyle = '#109910';
    context.font = '16px _sans';
    context.fillText('Guesses: ' + guesses, 215, 60);
    // 더 높은지 낮은지
    context.fillStyle = '#000';
    context.font = '16px _sans';
    context.fillText('Higher Or Lower: ' + higherOrLower, 150, 125);

    // 추측한 문자
    context.fillStyle = '#f00';
    context.font = '16px _sans';
    context.fillText('Letters Guessed: ' + lettersGuessed.toString(), 10, 260);

    if (!gameOver) return;
    context.fillStyle = '#f00';
    context.font = '40px _sans';
    context.fillText('You Got it!', 150, 180);
  };

  const createImageDataPressed = (e) => {
    console.log(theCanvas.toDataURL());
    window.open(
      theCanvas.toDataURL(),
      'canvasImage',
      'left=0,top=0,width=' + theCanvas.width + ',height=' + theCanvas.height + ',toolbar=0, resizable=0'
    );
  };
  initGame();
};

window.addEventListener('load', eventWindowLoaded, false);

const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    context.strokeStyle = 'black';
    context.lineWidth = 10;
    context.lineCap = 'square';
    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(100, 0);
    context.stroke();
    context.closePath();
  };

  drawScreen();
};

window.addEventListener('load', init, false);

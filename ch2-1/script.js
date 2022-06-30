const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    context.fillStyle = '#aaa';
    context.fillRect(0, 0, 200, 200);
    context.fillStyle = '#000';
    context.font = '20px _sans';
    context.textBaseline = 'top';
    context.fillText('Canvas', 0, 0);
  };

  drawScreen();
};

window.addEventListener('load', init, false);

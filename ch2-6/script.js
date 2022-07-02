const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    // 화면에 큰 사각형을 그린다
    context.fillStyle = 'black';
    context.fillRect(10, 10, 200, 200);

    context.fillStyle = 'red';
    context.fillRect(1, 1, 50, 50);

    context.globalCompositeOperation = 'source-over';
    context.fillRect(60, 1, 50, 50);

    context.globalCompositeOperation = 'destination-over';
    context.fillRect(1, 60, 50, 50);

    context.globalAlpha = 0.5;
    context.globalCompositeOperation = 'source-atop';
    context.fillRect(60, 60, 50, 50);
  };

  drawScreen();
};

window.addEventListener('load', init, false);

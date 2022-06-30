const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    context.fillStyle = '#000';
    context.strokeStyle = '#f0f';
    context.lineWidth = 2;
    context.fillRect(10, 10, 40, 40);
    context.strokeRect(0, 0, 60, 60);
    context.clearRect(20, 20, 20, 20);
  };

  drawScreen();
};

window.addEventListener('load', init, false);

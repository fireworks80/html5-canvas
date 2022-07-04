const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(2, 2);
    context.fillStyle = 'red';
    context.fillRect(100, 100, 50, 50);

    context.setTransform(1, 0, 0, 1, 0, 0);
    const x = 100;
    const y = 100;
    const width = 50;
    const height = 50;
    const angleInRadian = (45 * Math.PI) / 180;

    context.translate(x + 0.5 * width, y + 0.5 * height);
    context.scale(2, 2);
    context.rotate(angleInRadian);
    context.fillStyle = 'black';
    context.fillRect(-0.5 * width, -0.5 * height, width, height);
  };

  // drawScreen();
  const drawScreenRectangle = () => {
    const x = 100;
    const y = 100;
    const width = 100;
    const height = 50;
    const angleInRadian = (90 * Math.PI) / 180;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(x + 0.5 * width, y + 0.5 * height);
    context.rotate(angleInRadian);
    context.fillStyle = 'red';
    context.fillRect(-0.5 * width, -0.5 * height, width, height);
  };

  drawScreenRectangle();
};

window.addEventListener('load', init, false);

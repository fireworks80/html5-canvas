const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    context.fillStyle = 'black';
    context.fillRect(20, 20, 25, 25);

    const angleRect = (ang, x) => {
      const y = 100;
      const width = 40;
      const height = 40;
      context.setTransform(1, 0, 0, 1, 0, 0);
      const angle = ang * (Math.PI / 180);
      context.translate(x + 0.5 * width, y + 0.5 * height);
      context.rotate(angle);
      context.fillStyle = 'red';
      context.fillRect(-0.5 * width, -0.5 * height, width, height);
    };
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // const angle = 45 * (Math.PI / 180);
    // context.rotate(angle);
    // context.fillStyle = 'red';
    // context.fillRect(100, 100, 50, 50);

    // context.setTransform(1, 0, 0, 1, 0, 0);
    // const angle = 45 * (Math.PI / 180);
    // const x = 100;
    // const y = 100;
    // const width = 50;
    // const height = 50;

    // context.translate(x + 0.5 * width, y + 0.5 * height);
    // context.rotate(angle);
    // context.fillStyle = 'red';
    // context.fillRect(-0.5 * width, -0.5 * height, width, height);

    angleRect(45, 50);
    angleRect(75, 100);
    angleRect(90, 150);
    angleRect(120, 200);
  };

  drawScreen();
};

window.addEventListener('load', init, false);

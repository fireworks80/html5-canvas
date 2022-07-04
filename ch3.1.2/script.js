const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const input = document.querySelector('input');
  const select = document.querySelector('select');
  let type = 'fill';
  let value = '';

  context.strokeStyle = 'black';
  context.strokeRect(10, 10, canvas.width - 10, canvas.height - 10);

  const drawScreen = () => {
    context.fillStyle = '#ffffaa';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#000';
    context.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

    const metrics = context.measureText(value);
    const xPos = canvas.width / 2 - metrics.width / 2;
    const yPos = canvas.height / 2;
    context.font = '50px serif';
    if (type === 'fill') {
      context.fillStyle = '#fcd';
      context.fillText(value, xPos, yPos);
    }
    if (type === 'stroke') {
      context.strokeStyle = '#000';
      context.strokeText(value, xPos, yPos);
    }
    if (type === 'both') {
      context.fillStyle = '#fcd';
      context.fillText(value, xPos, yPos);
      context.strokeStyle = '#000';
      context.strokeText(value, xPos, yPos);
    }
  };

  const handleChangeSelect = (e) => {
    const value = e.target.value;
    type = value;
    drawScreen();
  };

  input.addEventListener(
    'keyup',
    (e) => {
      value = e.target.value;
      drawScreen();
    },
    false
  );

  select.addEventListener('change', handleChangeSelect, false);

  drawScreen();
};
window.addEventListener('load', init);

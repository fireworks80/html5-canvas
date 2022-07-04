const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const input = document.querySelector('input');

  const drawScreen = (value) => {
    context.font = '50px serif';
    context.fillStyle = '#fcd';
    context.fillText(value, 100, 80);
  };

  input.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    drawScreen(value);
  });
};
window.addEventListener('load', init);

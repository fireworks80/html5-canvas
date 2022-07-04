const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawImage = () => {
    const fillImage = new Image();
    fillImage.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0t019_otAjshIdrmwEFHslURzCUo6fC4OQ&usqp=CAU';

    const draw = () => {
      const fillPattern = context.createPattern(fillImage, 'repeat');
      context.fillStyle = fillPattern;
      context.fillRect(0, 0, 500, 500);
    };
    fillImage.addEventListener('load', draw);
  };

  drawImage();
};
window.addEventListener('load', init);

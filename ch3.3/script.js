const init = () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  let message = '';
  let fontFamily = '_sans';
  let fillOrStroke = 'fill';
  let fontSize = 10;
  let fontColor = '#000';
  let fontWeight = 'normal';

  const textStyle = {
    fill: ({ x, y }) => {
      ctx.fillStyle = `${fontColor}`;
      ctx.fillText(message, x, y);
    },
    stroke: ({ x, y }) => {
      ctx.strokeStyle = 'gray';
      ctx.strokeText(message, x, y);
    },
    both: (position) => {
      textStyle.fill(position);
      textStyle.stroke(position);
    },
    draw(type, position) {
      this[type]?.(position);
    },
  };

  const drawText = () => {
    const metrics = ctx.measureText(message);
    const textWidth = metrics.width;
    const posX = width / 2 - textWidth / 2;
    const posY = height / 2;
    console.log(fontFamily);
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

    textStyle.draw(fillOrStroke, { x: posX, y: posY });
  };

  const drawImage = () => {
    ctx.fillStyle = 'yellowgreen';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(10, 10, width - 20, height - 20);

    drawText();
  };

  const handleInputText = (e) => {
    const target = e.target;
    console.log(target.value);
    message = target.value;
    drawImage();
  };

  const handleChangeStroke = (e) => {
    const target = e.target;
    console.log(target.value);
    fillOrStroke = target.value;
    drawImage();
  };

  const handleChangeFontFamily = (e) => {
    fontFamily = e.target.value;
    drawImage();
  };

  const handleFontSize = (e) => {
    console.log('size', e.target.value);
    fontSize = e.target.value;
    drawImage();
  };

  const handleFontColor = (e) => {
    fontColor = e.target.value;

    drawImage();
  };

  const handleFontWeight = (e) => {
    fontWeight = e.target.value;
    drawImage();
  };
  const handleChangeSize = (e) => {
    const canvasWidthEl = form.querySelector('#width');
    const canvasHeightEl = form.querySelector('#height');
    let width = 0;
    let height = 0;

    const style = `width: ${canvasWidthEl.value}px; height: ${canvasHeightEl.value}px`;
    canvas.style = style;
    console.log(e.target.id);
    drawImage();
  };

  const handleCreateImage = () => {
    const textArea = document.querySelector('#text-area');
    console.log(canvas.toDataURL());
    const dataUrl = canvas.toDataURL();
    textArea.value = dataUrl;
    const img = document.createElement('img');
    img.src = dataUrl;
    document.body.appendChild(img);
  };
  drawImage();

  const form = document.querySelector('form');
  const textInputEl = form.querySelector('#text-input');
  const strokeEl = form.querySelector('#stroke');
  const fontFamilyEl = form.querySelector('#font-family');
  const fontSizeEl = form.querySelector('#font-size');
  const fontColorEl = form.querySelector('#font-color');
  const fontWeightEl = form.querySelector('#font-weight');
  const canvasWidthEl = form.querySelector('#width');
  const canvasHeightEl = form.querySelector('#height');
  const btnEl = form.querySelector('#create-image');

  textInputEl.addEventListener('input', handleInputText);
  strokeEl.addEventListener('change', handleChangeStroke);
  fontFamilyEl.addEventListener('change', handleChangeFontFamily);
  fontSizeEl.addEventListener('input', handleFontSize);
  fontColorEl.addEventListener('change', handleFontColor);
  fontWeightEl.addEventListener('change', handleFontWeight);
  canvasWidthEl.addEventListener('change', handleChangeSize);
  canvasHeightEl.addEventListener('change', handleChangeSize);
  btnEl.addEventListener('click', handleCreateImage);
};

window.addEventListener('load', init);

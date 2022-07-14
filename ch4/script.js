const placeShip = (ctx, img, posX, posY, width, height) => {
  width && height ? ctx.drawImage(img, posX, posY, width, height) : ctx.drawImage(img, posX, posY);
};

const eventWindowLoaded = () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const eventShipLoad = () => {
    drawScreen();
  };

  const spaceShip = new Image();
  spaceShip.src = 'ship1.png';
  spaceShip.addEventListener('load', eventShipLoad, false);

  const drawScreen = () => {
    // 변경사항 오는 위치
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 0, 200, 200);
    ctx.font = '20px _sans';
    ctx.textBaseline = 'top';
    ctx.fillText('Canvas', 0, 0);
    placeShip(ctx, spaceShip, 0, 0);
    placeShip(ctx, spaceShip, 0, 34, 32, 32);
    placeShip(ctx, spaceShip, 0, 68, 64, 64);
    placeShip(ctx, spaceShip, 0, 140, 16, 16);
  };

  drawScreen();
};
window.addEventListener('load', eventWindowLoaded, false);

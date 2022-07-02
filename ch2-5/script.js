const init = () => {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const drawScreen = () => {
    context.fillStyle = 'black';
    context.fillRect(10, 10, 200, 200);
    context.save();
    context.beginPath();

    // 0, 0을 시작접으로 하는 가로, 세로 50인 사각형 영역을 선택한다.
    context.rect(0, 0, 50, 50);
    context.clip();

    context.strokeStyle = 'green';
    context.lineWidth = 1;
    context.strokeRect(0, 0, 50, 50);

    // 빨간원 그리기
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    // 원 그리기
    context.stroke();
    context.closePath();
    context.restore();

    // 전체 캔버스를 영역으로 선택한다.
    context.beginPath();
    context.rect(0, 0, 500, 500);
    context.clip();

    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.strokeRect(0, 0, 500, 500);

    // 파란색 원을 그린다
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 5;
    context.arc(100, 100, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    // 원 그리기
    context.stroke();
    context.closePath();
  };

  drawScreen();
};

window.addEventListener('load', init, false);

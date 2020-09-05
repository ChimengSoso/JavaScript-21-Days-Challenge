(() => {
  // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas, 
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 400
    }
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: random(0.5, 2.5),
        speedX: random(-5, 3),
        speedY: random(1, 3)
      }
    })
  }

  function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
    const r = random(200, 255);
    const g = random(200, 255);
    const b = random(200, 255);
    const opacity = random(0.8, 1);
    canvasContext.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    canvasContext.fill();
  }

  function moveSnowBall(canvas, snowBall) {
    snowBall.x = (snowBall.speedX + snowBall.x + canvas.width) % canvas.width;
    snowBall.y = (snowBall.speedY + snowBall.y) % canvas.height;
  }

  function run() {
    const {canvas, canvasContext, numberOfSnowBalls} = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    
    
    setInterval(()=> {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
    }, 60)
  }
  run();
})();

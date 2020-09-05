(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyElem = document.querySelector('body');
    const eyeElems = document.querySelectorAll('.eye');
    
    function onMouseMove({pageX, pageY}) {
      eyeElems.forEach((eyeElem) => {
        const {left, top } = eyeElem.getBoundingClientRect();

        const eyeCenterX = left + eyeElem.offsetWidth / 2;
        const eyeCenterY = top + eyeElem.offsetHeight / 2;
        const radian = -Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
        
        eyeElem.style.transform = `rotate(${radian}rad)`;
      });
    }

    bodyElem.addEventListener('mousemove', onMouseMove);
  }
  run();

})();

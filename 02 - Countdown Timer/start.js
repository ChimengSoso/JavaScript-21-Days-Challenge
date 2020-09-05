(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date('June 5, 2020 23:59:59').getTime();
    const unixTimeLeft = newYear - now;

    // const daysElem = document.getElementById('days');
    // daysElem.innerText = Math.floor(unixTimeLeft / DAY);
    setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
    setElementInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));
    setElementInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
    setElementInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));
    
  }

  function run(){
    setInterval(countDown, SECOND);
  }
  run();
})();

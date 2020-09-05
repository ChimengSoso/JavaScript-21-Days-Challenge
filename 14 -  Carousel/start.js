(() => {
  // เริ่มเขียนโค้ด
  let currentIndex = 0;

  function displayImage(imageElems, newIndex) {
    newIndex = (newIndex + imageElems.length) % imageElems.length;
    const newImage = imageElems[newIndex];
    newImage.scrollIntoView( {behavior: 'smooth'});

    currentIndex = newIndex;
  }

  function run() {
    const imageElems = document.querySelectorAll('img');
    console.log(imageElems);

    const previousBtnElem = document.querySelector('.previous');
    const nextBtnElems = document.querySelector('.next');

    previousBtnElem.addEventListener('click', () => displayImage(imageElems, currentIndex - 1));
    nextBtnElems.addEventListener('click', () => displayImage(imageElems, currentIndex + 1));


  }
  run();
})();

function openModalTwo() {
    document.getElementById("myModalTwo").style.display = "block";
  }
  
  function closeModalTwo() {
    document.getElementById("myModalTwo").style.display = "none";
  }
  
  let slideIndexTwo = 1;
  showSlidesTwo(slideIndexTwo);
  
  function plusSlidesTwo(b) {
    showSlidesTwo(slideIndexTwo += b);
  }
  
  function currentSlideTwo(b) {
    showSlidesTwo(slideIndexTwo = b);
  }
  
  function showSlidesTwo(b) {
    let k;
    let slidesTwo = document.getElementsByClassName("mySlidesTwo");
    let dotsTwo = document.getElementsByClassName("demoTwo");
    let captionTextTwo = document.getElementById("captionTwo");
    if (b > slidesTwo.length) {slideIndexTwo = 1; }
    if (b < 1) {slideIndexTwo = slidesTwo.length; }
    for (k = 0; k < slidesTwo.length; k++) {
        slidesTwo[k].style.display = "none";
    }
    for (k = 0; k < dotsTwo.length; k++) {
        dotsTwo[k].className = dotsTwo[k].className.replace(" activeTwo", "");
    }
    slidesTwo[slideIndexTwo-1].style.display = "block";
    dotsTwo[slideIndexTwo-1].className += " activeTwo";
    captionTextTwo.innerHTML = dotsTwo[slideIndexTwo-1].alt;
  }
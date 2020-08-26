var first = document.getElementById('firstbanner');
var second = document.getElementById('secondbanner');
var radio1 = document.getElementById('radio1');
var radio2 = document.getElementById('radio2');
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("f1banner");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.opacity = "1"; 
  if(slideIndex == 1){
    radio1.style.transition = '0.3s ease-out';
    radio2.style.transition = '0.3s ease-out';
radio1.style.width = '35px';
radio2.style.width = '25px';
    radio1.onclick = function() {
        second.style.opacity= '0';
        first.style.opacity= '1';
        radio1.style.transition = '0.3s ease-out';
        radio2.style.transition = '0.3s ease-out';
        second.style.transition = '0.3s ease-out';
        first.style.transition = '0.3s ease-out';
        radio1.style.width = '35px';
        radio2.style.width = '25px';
        clearTimeout(carousel);
    }
    radio2.onclick = function() {
        first.style.opacity= '0';
        second.style.opacity= '1';
        second.style.transition = '0.3s ease-out';
        first.style.transition = '0.3s ease-out';
        radio1.style.transition = '0.3s ease-out';
        radio2.style.transition = '0.3s ease-out';
        radio1.style.width = '25px';
        radio2.style.width = '35px';
        clearTimeout(carousel);
          }
  }else {
    radio1.style.transition = '0.3s ease-out';
    radio2.style.transition = '0.3s ease-out';
    second.style.transition = '0.3s ease-out';
    first.style.transition = '0.3s ease-out';
    radio1.style.width = '25px';
    radio2.style.width = '35px';
}
setTimeout(carousel,3800); 
}
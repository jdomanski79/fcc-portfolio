console.clear();  
let el = document.getElementById('portfolio');
  let scrollY = window.pageYOffset;  
  let scrollDiff = el.offsetTop - scrollY;  
  console.log(el.offsetTop);
console.log(window.pageYOffset);
let y = scrollY;
window.scrollTo(0,500);
function scrollTo(){
    
    if (window.pageYOffset != el.offsetTop) {
      y += 10;
      console.log(y);
      if (y > el.offsetTop) {
        y = el.offsetTop;
        return;
      }
      window.scrollTo(0,y);
      setTimeout(scrollTo,100);
    };
  }
scrollTo();
console.clear();  
let el = document.getElementById('portfolio');
  let scrollY = window.pageYOffset;
  let navHeight = document.querySelector('nav ul').offsetHeight;  
  let scrollDiff = el.offsetTop - scrollY;  
  console.log(el.offsetTop, navHeight);
let y = scrollY;
//window.scrollTo(0,500);

function scroll(){
    
      y += 5;
      if (y > (el.offsetTop - navHeight)) return;
      window.scrollTo(0,y);
      setTimeout(scroll,1);
  }
scroll();
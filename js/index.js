console.clear();  
const scrollTimes = 40;
const scrollStepTime = 3;

const navLinks = document.querySelectorAll('nav a');

for (let link of navLinks){
  link.addEventListener('click', handleScroll);
}

function handleScroll(event){
  event.preventDefault();
  let elId = event.target.href.slice(event.target.href.indexOf('#') + 1);
  let element = document.getElementById(elId);
  let navHeight = document.querySelector('nav ul').offsetHeight;
  const scrollEnd = element.offsetTop - navHeight;
  const delta = Math.floor((scrollEnd - window.pageYOffset) / scrollTimes);
  let step = window.pageYOffset;
  console.log(element, scrollEnd, delta, step,navHeight);
  scrollToId();



  function scrollToId(){
    if (Math.abs(step - scrollEnd) > Math.abs(delta)) {
      step += delta;
      // console.log(Math.abs(step - scrollEnd), delta);
    }
    else {
      step = scrollEnd;
      window.scrollTo(0,step);
        
        return;
    }
    window.scrollTo(0,step);
    setTimeout(scrollToId, scrollStepTime);
  }
}

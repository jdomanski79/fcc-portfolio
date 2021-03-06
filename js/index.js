console.clear();  
const scrollTimes = 40;
const scrollStepTime = 3;

const navLinks = document.querySelectorAll('nav a:not(.nav-icon)');

for (let link of navLinks){
  link.addEventListener('click', handleScroll);
}
// event listener for mobile menu icon
document.querySelector('.nav-icon').addEventListener('click', showNav);

function handleScroll(event){
  event.preventDefault();

  // hide menu on small screen
  document.querySelector('nav').classList.remove('clicked');
  
  let elId = this.href.slice(this.href.indexOf('#') + 1);
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
    } else {
      step = scrollEnd;
      window.scrollTo(0,step);
      return;
    }
    window.scrollTo(0,step);
    setTimeout(scrollToId, scrollStepTime);
  }
}

function showNav(e) {
  // avoid returning to top after mobile menu clicked
  e.preventDefault();
  document.querySelector('nav').classList.toggle('clicked');
}

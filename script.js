const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

#counter;

let counts=0;
let c=document.getElementById("counter");
var q=document.querySelectorAll("#count");
for(var i=0;i<q.length;i++)
{
  q[i].addEventListener("click",event=>{
  var k=c.classList;
  var m='animated-counter';
  counts++;
  c.innerText=counts;
  k.remove(m,k.contains(m));
  setTimeout(()=>
    c.classList.add('animated-counter'),0
  )
})
}

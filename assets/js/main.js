/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


const toggleBtn = document.getElementById('toggle-mode-btn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// const likeButton = document.querySelector("#like-button");
// const likeCount = document.querySelector("#like-count");
// let count = localStorage.getItem('like-count') || 0;
// likeCount.innerHTML = count;

// likeButton.addEventListener("click", function() {
//     count++;
//     likeCount.innerHTML = count;
//     localStorage.setItem('like-count', count);
// });

let count = localStorage.getItem("likeCount") || 0;
document.getElementById("like-count").innerHTML = count;

function like() {
  count++;
  localStorage.setItem("likeCount", count);
  document.getElementById("like-count").innerHTML = count;
}


var butterflies = document.getElementsByClassName("butterfly");

for (var i = 0; i < butterflies.length; i++) {
  var randomDelay = Math.random() * 10;
  butterflies[i].style.animationDelay = randomDelay + "s";
}



setInterval(function() {
  var bird = document.getElementById("bird");
  var x = parseInt(bird.style.left);
  var y = parseInt(bird.style.top);
  bird.style.left = (x + 10) + "px";
  bird.style.top = (y + 10) + "px";
}, 100);

// var bird1 = document.getElementById("bird1");
// var pos = 0;
// function animate() {
//   pos++;
//   bird1.style.left = pos + "px";
//   requestAnimationFrame(animate);
// }
// animate();

setInterval(function() {
    var bird1 = document.getElementById("bird1");
    var x = parseInt(bird1.style.right);
    var y = parseInt(bird1.style.bottom);
    bird1.style.left = (x) + "px";
    bird1.style.top = (y) + "px";
  }, 100);

  fetch("https://example.com")
  .then(response => response.text())
  .then(data => {
    document.getElementById("Mohith").innerHTML = data;
  })
  .catch(error => console.error(error));

  

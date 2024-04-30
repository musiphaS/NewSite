function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  }
  
 function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width ="0"
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('navdiv ul a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    // let id = sec.getAttribute(id);
    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('navdiv ul a[href*=' + id +']').classList.add('active');
      })
    }
  })
}
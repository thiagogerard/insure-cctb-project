const nav = document.querySelector('nav');
const toggleNav = document.getElementById('hamburger');
const closeNav = document.getElementById('close');
const navLinks = document.querySelectorAll('.nav-links')

toggleNav.addEventListener('click',function(){
    nav.classList.toggle('active');
})

closeNav.addEventListener('click',function(){
    nav.classList.remove('active');
})

navLinks.forEach(function(item){
    item.addEventListener('click',function(){
        nav.classList.remove('active');
    })
})
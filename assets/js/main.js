// Loader
let loader = document.querySelector("#loader");

function loaderFn() {
    loader.style.display = "none";
}

// Nav Bar Active Tab Show
let navBar = document.querySelector(".nav-links");
let navItem = document.querySelectorAll(".nav-links > a")

navItem.forEach(element => {
    element.addEventListener('click', function(){
        navBar.querySelector('.active').classList.remove('active');
        element.classList.add('active');        
    });
});
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


// Movie Description on hover 
let movieItem = document.querySelectorAll(".grid-img")
let movieDescription = document.querySelectorAll(".img-div")

movieItem.forEach(element => {
    element.addEventListener("mouseover", function(){
        element.classList.add('hover');
        element.nextElementSibling.style.display = "block";
        element.nextElementSibling.innerHTML = `
        <div class="flex">
            <div class="flex">
                <i class="fas fa-play play-btn2"></i>
                <h3 class="movie-name">Gully Boy</h3>
            </div>
            <div>
                <i class="fas fa-plus"></i>
            </div>
        </div>
        <p class="movie-description">A coming-of-age story based on the lives of street rappers in Mumbai</p>
        <div class="flex">
            <div class="flex">
                <small class="duration"> 2hr 33 min</small>
                <small class="release-year">2019</small>
                <div class="flex">
                    <i class="far fa-star"></i>
                    <small class="rating">4.3</small>
                </div>    
            </div>
            <div class="flex">
                <small class="certified">UA</small>                                    
            </div>
        </div>`
    })
    element.addEventListener("mouseout", function(){
        element.classList.remove('hover');   
        element.nextElementSibling.style.display = "none";
    })
});







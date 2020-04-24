// Loader
let loader = document.querySelector("#loader");

function loaderFn() {
    loader.style.display = "none";
}

// Header - Nav Bar Active Tab Show
let navBar = document.querySelector(".nav-links");
let navItem = document.querySelectorAll(".nav-links > a")

navItem.forEach(element => {
    element.addEventListener('click', function(){
        navBar.querySelector('.active').classList.remove('active');
        element.classList.add('active');        
    });
});


// Array of Movie details
let movieData = [
    {
        mID:"id1",
        movieName:"La Casa Da Papel",
        movieDes:"Money Heist is a Spanish heist crime drama television series",
        movieDur: "2 hr 33 min",
        relYear: "2019",
        movieRating: "3.5"  
    },
    {
        mID:"id2",
        movieName:"Inception",
        movieDes:"Science fiction action film written and directed by Christopher Nolan",
        movieDur: "2 hr 28 min",
        relYear: "2010",
        movieRating: "4.4"  

    },
    {
        mID:"id3",
        movieName:"Gully Boy",
        movieDes:"A coming-of-age story based on the lives of street rappers in mumbai",
        movieDur: "2 hr 33 min",
        relYear: "2019",
        movieRating: "4.3"  
    },
    {
        mID:"id4",
        movieName:"Joker",
        movieDes:"Forever alone in a crowd, failed comedian Arthur Fleck seeks conn. as he walks the streets of Gotham City.",
        movieDur: "2 hr 02 min",
        relYear: "2019",
        movieRating: "4.3"  
    },
    {
        mID:"id5",
        movieName:"Yeh Jawani Hai Dewani",
        movieDes:"It is an Indian romantic drama film, directed by Ayan Mukerji and produced by Karan Johar.",
        movieDur: "2 hr 56 min",
        relYear: "2013",
        movieRating: "3.6"  

    },
    {
        mID:"id6",
        movieName:"Zindagi Na Milegi Dobara",
        movieDes:"It is an Indian buddy road film directed by Zoya Akhtar and produced by Farhan Akhtar",
        movieDur: "2 hr 35 min",
        relYear: "2011",
        movieRating: "4.1"  
    },
    {
        mID:"id7",
        movieName:"DDLJ",
        movieDes:"Dilwale Dulhaniya Le Jayenge is an Indian romance film, directed by Aditya Chopra",
        movieDur: "3 hr 09 min",
        relYear: "1995",
        movieRating: "4.2"  
    },
    {
        mID:"id8",
        movieName:"Bhag Milkha Bhag",
        movieDes:"Milkha Singh, an Indian athlete, overcomes many agonising obstacles in order to become a world champion",
        movieDur: "3 hr 09 min",
        relYear: "2013",
        movieRating: "4.1"  
    }
]

// To Show Movie Details on Hover 
let gridImg = document.querySelectorAll(".movie");

gridImg.forEach(element => {
    element.addEventListener("mouseover", function(){

        let mid = event.target.getAttribute("data-id")

        element.firstElementChild.classList.add('img-hover');
        element.lastElementChild.style.display = "block";

            for(let i = 0; i <= movieData.length; i++) {
                    
                    if(mid === movieData[i].mID) {
                        element.lastElementChild.innerHTML = `
                        <div class="flex">
                            <div class="flex">
                                <i class="fas fa-play play-btn2"></i>
                                <h3 class="movie-name">${movieData[i].movieName}</h3>
                            </div>
                            <div>
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                        <p class="movie-description">${movieData[i].movieDes}</p>
                        <div class="flex">
                            <div class="flex">
                                <small class="duration">${movieData[i].movieDur}</small>
                                <small class="release-year">${movieData[i].relYear}</small>
                                <div class="flex">
                                    <i class="far fa-star"></i>
                                    <small class="rating">${movieData[i].movieRating}</small>
                                </div>    
                            </div>
                            <div class="flex">
                                <small class="certified">UA</small>                                    
                            </div>
                        </div>`        
                    }            
            }
    })
    element.addEventListener("mouseout", function(){
        element.firstElementChild.classList.remove('img-hover');   
        element.lastElementChild.style.display = "none";
    })
});
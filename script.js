const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3175940490f2743e7c1632d39f879788&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=3175940490f2743e7c1632d39f879788&query=";


 const moiveBox = document.querySelector("#movie-box")
 const getMovies  =  async(url)=>{
   const response = await fetch(url)
   const data = await response.json()
    showMovies (data)
      
 }

 getMovies(APIURL)

const showMovies =(data)=>{
      moiveBox.innerHTML = '';

     data.results.forEach(result => {


     const imgPath = result.poster_path === null ? "img/image.missing.png"
              : IMGPATH + result.poster_path
          
           const box = document.createElement('div');
           box.classList.add('box');
           box.innerHTML = `
                  <img src = "${imgPath}" />
                  <div class = "overlay">
                         <div class= "title">
                          <h2> ${result.original_title} </h2>
                          <span>${result.vote_average}</span>
                       </div>
                        <h3>Overview :</h3>
                        <p>
                             ${result.overview}
                        </p>
                  </div>
           
           `
           moiveBox.appendChild(box)
     });
}

document.querySelector('#search').addEventListener(
    "keyup",
     function(event){
        if(event.target.value !=0){
             getMovies(SEARCHAPI + event.target.value)
        }else{
             getMovies(SEARCHAPI)
        }
     }
)
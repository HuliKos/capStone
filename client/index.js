// get DOM element
let inspirationBtn = document.querySelector('#inspiration-button')

// Quote section API
const url = "https://api.quotable.io/random";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; document.querySelector(".author").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }

// GET POST DELET PUSH
const createInspiration = () => axios.get(baseURL).then

// Bring DOM element and callback together with addEventListner
inspirationBtn.addEventListener('click', generateQuote)

// DONE ==> Grab all to be built buttons, assign alert function
const siteInfoBtn = document.querySelectorAll('.details')
console.log(siteInfoBtn)

function tbd(event) {
    alert('The information will be added at phase 2 of site development.')
}
for(i=0; i<siteInfoBtn.length; i++){
    siteInfoBtn[i].addEventListener('click', tbd)
}
const siteInfoBtn = document.querySelectorAll('.details')
console.log(siteInfoBtn)

function tbd(event) {
    alert('The information will be added at phase 2 of site development.')
}
for(i=0; i<siteInfoBtn.length; i++){
    siteInfoBtn[i].addEventListener('click', tbd)
}
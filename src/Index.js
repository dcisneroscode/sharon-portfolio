import { Desk } from "./Arquitecture/Watch.js";
import { Mobil } from "./Arquitecture/Watch.js";

function main(){
    Desk();
    Mobil();

}

main();



const images = Array.from(document.getElementsByClassName('carousel'));
const mainImg = document.getElementById('main-img');

function updateImage(event){
    let image = event.target;
    mainImg.src = image.src;
}

images.forEach(function(image){
    image.addEventListener('click',updateImage);
});











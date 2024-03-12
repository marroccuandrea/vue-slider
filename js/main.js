// Costanti
const imageWrapper = document.querySelector('.my-carousel-images');
const imageList = document.querySelector('.my-thumbnails');
const prev = document.querySelector('.my-previous');
const next = document.querySelector('.my-next');


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
// Porto in pagina le immagini dell'array
images.forEach(img =>{
imageWrapper.innerHTML += `
<div class="my-carousel-item">
    <img class="img-fluid" src="${img.url}" alt="">
    <div class="item-description px-3">
        <h2>${img.title}</h2>
        <p>${img.description}</p>
    </div>
</div>
`
})
// Porto in pagina come miniatura le immagini dell'array
images.forEach(img =>{
imageList.innerHTML += `
<div class="my-thumbnail">
    <img class="img-fluid" src="${img.url}" alt="">
</div>
`
})

//Contatore
let counterImg = 0;

const allImages = document.querySelectorAll('.my-carousel-item');
allImages[0].classList.add('active');

const thumbAll = document.querySelectorAll('.my-thumbnail');
thumbAll[0].classList.add('active');

// Funzioni per il carosello
next.addEventListener('click', function(){
    clickNext();
})
prev.addEventListener('click', function () {
    clickPrev();
})

// Funzioni
function clickNext(){
    allImages[counterImg].classList.remove('active');
    thumbAll[counterImg].classList.remove('active');
    counterImg++;
    if (counterImg === images.length) {
        counterImg=0;
    }
    allImages[counterImg].classList.add('active');
    thumbAll[counterImg].classList.add('active');
}

function clickPrev(){
    allImages[counterImg].classList.remove('active');
    thumbAll[counterImg].classList.remove('active');
    counterImg--;
    if(counterImg < 0){
        counterImg = allImages.length - 1;
    }
    allImages[counterImg].classList.add('active');
    thumbAll[counterImg].classList.add('active');
}

// Prendo il contenitore delle immagini e delle thumbnails per la funzione autoplay
const imgContainer = document.querySelector('.my-carousel-container');
// Scroll delle immagini ogni 3 secondi

startScrolling();
function startScrolling() {
    // Call clickUp function ogni 3 secondi
    interval = setInterval(clickNext, 3000);
}
// 3.
function stopScrolling(){
    clearInterval(interval);
}
// Si ferma lo scroll quado passo sopra all'immagine
imgContainer.addEventListener( 'mouseover', stopScrolling );
// Riprende lo scroll quando  si esce dall'immagine
imgContainer.addEventListener( 'mouseout',  startScrolling );
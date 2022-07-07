//Array immagini
const imgSrc = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];
const imagesGallery = [
  {
    url: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    title: "Svezia",
    description:
      "Svezia ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Perù",
    description:
      "Perù ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    title: "Chile",
    description:
      "Chile ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Argentina",
    description:
      "Argentina ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    title: "Colombia",
    description:
      "Colombia ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
];

const description = document.querySelector(".description");
//Crea HTML immagini
let image = "";
let title = "";
let caption = "";

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gallery = document.querySelector(".gallery");
const thumbnails = document.querySelector(".thumbnails");

for (let i = 0; i < imagesGallery.length; i++) {
  image += `<img src=${imagesGallery[i].url}  alt = "${imagesGallery[i].title}"/>`;
  title += `<h2 id="img-title" class="title">${imagesGallery[i].title}</h2>`;
  caption += `<p id="img-caption" class="caption">${imagesGallery[i].description}</p>`;
}

//Aggiunge immagini nell HTML
gallery.innerHTML = image;
thumbnails.innerHTML = image;
description.innerHTML = title + caption;

//Prende tutte le immagini nella gallery
const images = document.querySelectorAll(".gallery img");
const titles = document.querySelectorAll(".title");
const captions = document.querySelectorAll(".caption");
const thumbnailsImages = document.querySelectorAll(".thumbnails img");

for (let i = 0; i < thumbnailsImages.length; i++) {
  thumbnailsImages[i].addEventListener("click", (e) => {
    for (let j = 0; j < thumbnailsImages.length; j++) {
      thumbnailsImages[j].classList.remove("selected");
      images[j].classList.remove("d-block");
      titles[j].classList.remove("d-block");
      captions[j].classList.remove("d-block");
    }
    e.target.classList.add("selected");
    images[i].classList.add("d-block");
    titles[i].classList.add("d-block");
    captions[i].classList.add("d-block");
  });
}
//Active index
let currentActiveIndex = 0;

//Mostra imagine
images[currentActiveIndex].classList.add("d-block");
titles[currentActiveIndex].classList.add("d-block");
captions[currentActiveIndex].classList.add("d-block");
//Seleziona anterprima
thumbnailsImages[currentActiveIndex].classList.add("selected");

//Pulsante PREV
prevBtn.addEventListener("click", function () {
  images[currentActiveIndex].classList.remove("d-block");
  titles[currentActiveIndex].classList.remove("d-block");
  captions[currentActiveIndex].classList.remove("d-block");

  thumbnailsImages[currentActiveIndex].classList.remove("selected");

  currentActiveIndex--;

  if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;

  images[currentActiveIndex].classList.add("d-block");
  titles[currentActiveIndex].classList.add("d-block");
  captions[currentActiveIndex].classList.add("d-block");

  thumbnailsImages[currentActiveIndex].classList.add("selected");
});

//Pulsante NEXT
nextBtn.addEventListener("click", function () {
  images[currentActiveIndex].classList.remove("d-block");
  titles[currentActiveIndex].classList.remove("d-block");
  captions[currentActiveIndex].classList.remove("d-block");

  thumbnailsImages[currentActiveIndex].classList.remove("selected");

  currentActiveIndex++;

  if (currentActiveIndex === images.length) currentActiveIndex = 0;

  images[currentActiveIndex].classList.add("d-block");
  titles[currentActiveIndex].classList.add("d-block");
  captions[currentActiveIndex].classList.add("d-block");

  thumbnailsImages[currentActiveIndex].classList.add("selected");
});

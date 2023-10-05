import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createListItem = image => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
};

for (const image of galleryItems) {
  const newImage = createListItem(image);
  gallery.innerHTML += newImage;
}
// Uso (el segundo argumento es un objeto con opciones)
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

// eventos?
lightbox.on("show.simplelightbox", function (e) {
  e.preventDefault();
  // console.log(e.target);
});
// console.log(galleryItems);

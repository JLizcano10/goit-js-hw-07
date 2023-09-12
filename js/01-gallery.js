import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");
let instance;

const createListItem = image => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
};

for (const image of galleryItems) {
  const newImage = createListItem(image);
  gallery.innerHTML += newImage;
}

gallery.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  // console.log(e.target.dataset["source"]);
  const imageInModal = e.target.dataset["source"];
  openModal(imageInModal);
});

const openModal = imageSource => {
  instance = basicLightbox.create(`<img width="1280" src="${imageSource}">`);
  instance.show();

  window.addEventListener("keydown", closeModal);
};

const closeModal = e => {
  if (e.code === "Escape") {
    window.removeEventListener("keydown", closeModal);

    instance.close();
  }
};

console.log(galleryItems);

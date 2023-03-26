import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const builtItem = ({ description, preview, original }) => {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href = "${original}">
            <img 
                class="gallery__image"
                src = "${preview}"
                data-source = "${original}"
                alt="${description}"
            />
            </a>
    </li>`;
};
const markup = galleryItems.map(builtItem).join("");
gallery.innerHTML = markup;

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);
  instance.show();

  const closedButtonOfModalWindow = (event) => {
    if (event.code === "Escape") instance.close();
  };
  gallery.addEventListener("keydown", closedButtonOfModalWindow);
}

gallery.addEventListener("click", onImageClick);

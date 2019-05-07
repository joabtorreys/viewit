const lightbox = document.querySelector(".pickedimg");
// grab the lightbox
const img = document.querySelectorAll("img");
// grab all the images
img.forEach(img => {
  img.addEventListener("click", (img) => {
    lightbox.src = img.target.src;
  });
});

const image = document.querySelector(".qr_image"),
image_caption = document.querySelector(".generate_name"),        
input = document.querySelector(".generate_site"),
button = document.querySelector(".generate_btn"),
api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

button.addEventListener("click",() => {
    image.src = `${api}${input.value}`;
    image_caption.innerHTML = `${input.value}`;
});
const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/*
    이미지태그를 추가한다.
*/

const bgImage = document.createElement("img");
const imageUrl = "url( "+ `img/${chosenImage}` + ")";

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = imageUrl;
const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src= `js_nomadcoders_2022/img/${chosenImage}`;

const todaysQuotediv = document.querySelector("#quote");
document.body.appendChild(bgImage);

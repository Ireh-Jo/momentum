const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/${chosenImage}) no-repeat center center`;
document.body.style.backgroundSize = "100% 100%";

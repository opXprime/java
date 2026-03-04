export function randomImage(size) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/${size}/${size}`;
    return img;
}

export function generateRandomImageSize() {
    return Math.floor(Math.random() * 500) + 100;
}
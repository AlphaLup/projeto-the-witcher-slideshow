var timer = 3000;
count = 0;
var src_images = [
    "./images/wallpaper1.jpg",
    "./images/wallpaper2.jpg",
    "./images/wallpaper3.jpg",
    "./images/wallpaper4.jpg",
    "./images/wallpaper5.jpg",
    "./images/wallpaper6.jpg",
    "./images/wallpaper7.jpg"
];
var img = window.document.getElementById("img");

function changeImages(){
    img.src = src_images[count]
    if(count < src_images.length - 1){
        count++
    }else {
        count = 0
    }

    setTimeout('changeImages()', timer);
}

window.onload = changeImages;
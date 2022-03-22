let c = document.getElementById("Canvas");
let ctx = c.getContext("2d");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const bg = new Image();
const body = new Image();
const face = new Image();
const head = new Image();
const clothes = new Image();
const hat = new Image();

function genBg() {
    switch (getRndInteger(1,5)) {
        case 1:
            return "img/Backgrounds/blue.png";
        case 2:
            return "img/Backgrounds/green.png";
        case 3:
            return "img/Backgrounds/orange.png";
        case 4:
            return "img/Backgrounds/pink.png";
        case 5:
            return "img/Backgrounds/red.png";
        default:
            return "img/Backgrounds/pink.png";
    }
}

function genBody() {
    switch (getRndInteger(1,1)) {
        case 1:
            return "img/Body/body1.png";
        default:
            return "img/Body/body1.png";
    }
}

function genHead() {
    switch (getRndInteger(1,1)) {
        case 1:
            return "img/Head/head1.png";
        default:
            return "img/Head/head1.png";
    }
}

function genClothes() {
    switch (getRndInteger(1,1)) {
        case 1:
            return "img/Clothes/shirt1.png";
        default:
            return "img/Clothes/shirt1.png";
    }
}

function genFace() {
    switch (getRndInteger(1,1)) {
        case 1:
            return "img/Face/face1.png";
        default:
            return "img/Face/face1.png";
    }
}

function genHat() {
    switch (getRndInteger(1,4)) {
        case 1:
            return "img/Hats/crown.png";
        case 2:
            return "img/Hats/empty.png";
        case 3:
            return "img/Hats/merry.png";
        case 4:
            return "img/Hats/shark.png";
        default:
            return "img/Hats/empty.png";
    }
}

bg.src = genBg();
bg.onload = function() {
    ctx.drawImage(bg, 0, 0, 400, 400);
    body.src = genBody();
    body.onload = function() {
        ctx.drawImage(body, 0, 0, 400, 400);
    }
    head.src = genHead();
    head.onload = function() {
        ctx.drawImage(head, 0, 0, 400, 400);
    }
    clothes.src = genClothes();
    clothes.onload = function() {
        ctx.drawImage(clothes, 0, 0, 400, 400);
    }
    face.src = genFace();
    face.onload = function() {
        ctx.drawImage(face, 0, 0, 400, 400);
    }
    hat.src = genHat();
    hat.onload = function () {
        ctx.drawImage(hat, 0, 0, 400, 400)
    }
}
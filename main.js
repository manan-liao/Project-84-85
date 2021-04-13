canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.gif";

car1_image = "car1.png";
car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;

car2_image = "car2.png";
car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 10;

function add(){
    bg_img = new Image();
    bg_img.onload = uploadBackground;
    bg_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadCar1;
    rover_img.src = car1_image;

    rover_img = new Image();
    rover_img.onload = uploadCar2;
    rover_img.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        console.log("up arrow key");
    }
    if(keyPressed == "40"){
        console.log("down arrow key");
    }
    if(keyPressed == "37"){
        console.log("left arrow key");
    }
    if(keyPressed == "39"){
        console.log("right arrow key");
    }
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "87"){
        console.log("up key W");
    }
    if(keyPressed == "83"){
        console.log("down key S");
    }
    if(keyPressed == "65"){
        console.log("left key A");
    }
    if(keyPressed == "68"){
        console.log("right key D");
    }
}


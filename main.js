canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.gif";

car1_image = "car1.png";
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;

car2_image = "car2.png";
car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;

function add(){
    bg_img = new Image();
    bg_img.onload = uploadBackground;
    bg_img.src = background_image;

    car1_img = new Image();
    car1_img.onload = uploadCar1;
    car1_img.src = car1_image;

    car2_img = new Image();
    car2_img.onload = uploadCar2;
    car2_img.src = car2_image;
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
        up1();
    }
    if(keyPressed == "40"){
        console.log("down arrow key");
        down1();
    }
    if(keyPressed == "37"){
        console.log("left arrow key");
        left1();
    }
    if(keyPressed == "39"){
        console.log("right arrow key");
        right1();
    }
    if(keyPressed == "87"){
        console.log("up key W");
        up2();
    }
    if(keyPressed == "83"){
        console.log("down key S");
        down2();
    }
    if(keyPressed == "65"){
        console.log("left key A");
        left2();
    }
    if(keyPressed == "68"){
        console.log("right key D");
        right2();
    }
}

function up1(){
    if(car1_y > 0){
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed for car 1, x = "+car1_x+"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down1(){
    if(car1_y < 500){
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed for car 1, x = "+car1_x+"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left1(){
    if(car1_x > 0){
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed for car 1, x = "+car1_x+"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right1(){
    if(car1_x < 680){
        car1_x = car1_x + 10;
        console.log("when right arrow is pressed for car 1, x = "+car1_x+"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function up2(){
    if(car2_y > 0){
        car2_y = car2_y - 10;
        console.log("when W is pressed for car 2, x = "+car2_x+"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down2(){
    if(car2_y < 500){
        car2_y = car2_y + 10;
        console.log("when S is pressed for car 2, x = "+car2_x+"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left2(){
    if(car2_x > 0){
        car2_x = car2_x - 10;
        console.log("when A is pressed for car 2, x = "+car2_x+"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right2(){
    if(car2_x < 680){
        car2_x = car2_x + 10;
        console.log("when D is pressed for car 2, x = "+car2_x+"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
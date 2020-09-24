canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width= 100;
rover_height= 90;

rover_x= 10;
rover_y= 10;

nasa_image_array=["Nasa_image_1.jpg", "Nasa_image_2.jpg", "Nasa_image_3.jpg", "Nasa_image_4.jpg"];
random_number= Math.floor(Math.random()*4);
console.log(random_number);

background_image= nasa_image_array[random_number];
rover_image= "rover.png";

function add(){
background_img_tag= new Image();
background_img_tag.onload= uploadBackground;
background_img_tag.src= background_image;

rover_img_tag= new Image();
rover_img_tag.onload= uploadRover;
rover_img_tag.src= rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPress= e.keyCode;
    console.log(keyPress);
    if (keyPress=='38'){
        up();
        console.log("Up");
    }

    if (keyPress=='40'){
        down();
        console.log("Down");
    }

    if (keyPress=='37'){
        left();
        console.log("Left");
    }

    if (keyPress=='39'){
        right();
        console.log("Right");
    }

}
function up(){
    if (rover_y>=0){
        rover_y-=10;
        console.log("when up arrow is pressed, x= "+rover_x+", and y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y<=500){
        rover_y+=10;
        console.log("when down arrow is pressed, x= "+rover_x+", and y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x-=10;
        console.log("when left arrow is pressed, x= "+rover_x+", and y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x+=10;
        console.log("when right arrow is pressed, x= "+rover_x+", and y= "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
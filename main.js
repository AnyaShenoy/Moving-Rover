canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width= 100;
rover_height= 90;

rover_x= 10;
rover_y= 10;

background_image= "mars.jpg";
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

}

function down(){
    
}

function left(){

}

function right(){
    
}
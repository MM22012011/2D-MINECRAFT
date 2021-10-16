var canvas = new fabric.Canvas('myCanvas');

block_width = 30;
block_height = 30;

player_X = 10;
player_Y = 10;

var player_object="";
var block_image_object="";



function player_update(){
fabric.Image.fromURL("Player.jpg", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({

    top:player_Y, left:player_X
    });

canvas.add(player_object);
});
}


function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);

block_image_object.set({
    top:player_Y, left:player_X
});

canvas.add(block_image_object);

});

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {

        console.log("p and shift key pressed together");
        block_width = block_width + 10;
        block_height =block_height + 10;
        document.getElementById("CurrentWidth").innerHTML = block_width;
        document.getElementById("CurrentHeight").innerHTML = block_height;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {

        console.log("m and shift key pressed together");
        block_width = block_width - 10;
        block_height =block_height - 10;
        document.getElementById("CurrentWidth").innerHTML = block_width;
        document.getElementById("CurrentHeight").innerHTML = block_height;
    }

    if(keyPressed == '38'){
        console.log("UP");
        up();
}

if(keyPressed == '40'){
    console.log("DOWN");
    down();


}

if(keyPressed == '39'){
    console.log("RIGHT");
    right();


}

if(keyPressed == '37'){
    console.log("LEFT");
    left();


}

if(keyPressed == '87'){

console.log("w");
new_image("wall.jpg")}

if(keyPressed == '82'){

    console.log("r");
    new_image("ground.png")}

    
if(keyPressed == '89'){

    console.log("y");
    new_image("trunk.jpg")}

if(keyPressed == '68'){

    console.log("d");
    new_image("unique.jpg")}            
        
if(keyPressed == '71'){

    console.log("g");
    new_image("roof.jpg")}


if(keyPressed == '76'){

    console.log("l");
    new_image("yellow_wall.png")}


if(keyPressed == '67'){

    console.log("c");
    new_image("light_green.png")}


if(keyPressed == '66'){

    console.log("b");
    new_image("ground.jpg")}
               
if(keyPressed == '78'){

    console.log("n");
    new_image("dark_green.png")}

if(keyPressed == '90'){

    console.log("z");
    new_image("cloud.jpg")}
            

}


function up(){
    if(player_Y >=0){

        player_Y = player_Y - block_height;
        console.log(player_X+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_Y <=500){

        player_Y = player_Y + block_height;
        console.log(player_X+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_X <=850){

        player_X = player_X + block_width;
        console.log(player_X+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_X >=0){

        player_X = player_X - block_width;
        console.log(player_X+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
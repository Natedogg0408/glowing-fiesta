canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); 

c1_width = 110; 
c1_height = 70; 
c1_x = 10; 
c1_y = 10; 
c1_img = "car1.png";

c2_width = 110; 
c2_height = 70; 
c2_x = 10; 
c2_y = 85; 
c2_img = "racecar2.png";

background_img = "racingback.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_img; 

    c1_imgTag = new Image();
    c1_imgTag.onload = uploadc1; 
    c1_imgTag.src = c1_img;

    c2_imgTag = new Image();
    c2_imgTag.onload = uploadc2; 
    c2_imgTag.src = c2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadc1(){
    ctx.drawImage(c1_imgTag, c1_x, c1_y, c1_width, c1_height);
}

function uploadc2(){
    ctx.drawImage(c2_imgTag, c2_x, c2_y, c2_width, c2_height);
}

window.addEventListener("keydown", my_keydown); 

function my_keydown(e){
      keyPressed = e.keyCode; 
      console.log(keyPressed); 

      if(keyPressed == 38){
          up1();
          console.log("Up");

      }

      if(keyPressed == 40){
        down1();
        console.log("Down");

    }

    if(keyPressed == 37){
        left1();
        console.log("Left");
    }

    if(keyPressed == 39){
        right1();
        console.log("Right");
    }

    if(keyPressed == 87){
        up2();
        console.log("Up");

    }

    if(keyPressed == 83){
      down2();
      console.log("Down");

  }

  if(keyPressed == 65){
      left2();
      console.log("Left");
  }

  if(keyPressed == 68){
      right2();
      console.log("Right");
  }

  if(c1_x > 700){
      document.getElementById("results").innerHTML = "Car 1 Won!!"
  }

  if(c2_x > 700){
    document.getElementById("results").innerHTML = "Car 2 Won!!"
}
}


function up1(){
    if(c1_y >= 0){
        c1_y -= 10; 
        uploadBackground();
        uploadc1();
        uploadc2();
     }

}

function down1(){
    if(c1_y <= 500){
        c1_y += 10; 
        uploadBackground();
        uploadc1();
        uploadc2();
    }
}

function left1(){
    if(c1_x >= 0){
        c1_x -= 10; 
        uploadBackground();
        uploadc1();
        uploadc2();
    }
}

function right1(){
    if(c1_x <= 700){
        c1_x += 10; 
        uploadBackground();
        uploadc1();
        uploadc2();
    }
}



function up2(){
    if(c2_y >= 0){
        c2_y -= 10; 
        uploadBackground();
        uploadc2();
        uploadc1();
     }

}

function down2(){
    if(c2_y <= 500){
        c2_y += 10; 
        uploadBackground();
        uploadc2();
        uploadc1();
    }
}

function left2(){
    if(c2_x >= 0){
        c2_x -= 10; 
        uploadBackground();
        uploadc2();
        uploadc1();
    }
}

function right2(){
    if(c2_x <= 700){
        c2_x += 10; 
        uploadBackground();
        uploadc2();
        uploadc1();
    }
}
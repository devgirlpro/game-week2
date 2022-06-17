let bullets = [];
let enemies = [];
let score = 0;
let song;
let gameStart = false;


document.getElementsByClassName("glow-on-hover")[0].addEventListener("click", function() {

   if(gameStart === false) {
      gameStart = true;
   }else {
      location.reload()
   }
} )


function preload() {
   // soundFormats('mp3', 'wav');
    song = loadSound("./songs/idea-34284.mp3")
 }

function setup() {
   createCanvas(400, 400);
  
   //spawn enemies
   for(let i = 0; i < 25; i++) {
      // console.log("enemy")
      let enemy = {
         x: random(0, width),
         y: random(-800, 0)
      }
      enemies.push(enemy)
   }
   
}




function draw() {
   if (gameStart) {

      


   background(151);
   ellipseMode(CENTER);
   //draw the player
   noStroke();
   fill('white'); 
   circle(mouseX, mouseY , 25);

   //update & draw the bulets
   for (let bullet of bullets) {
      bullet.y -= 10
      fill('red'); 
      circle(bullet.x, bullet.y, 10)  
   };
   
   //update & draw enemies
   for (let enemy of enemies) {
      enemy.y += 1.5;
      fill('black'); 
      ellipse(enemy.x, enemy.y, 30, 14);
      if(enemy.y > height) {
         text("YOU LOSE!", width/2, height/2);
         noLoop()
      }
   }

   //deal with collisions   
   for (let enemy of enemies){
      for (let bullet of bullets){
         let distance = dist(enemy.x, enemy.y, bullet.x, bullet.y);
          if(distance < 30){
             let enemyIndex = enemies.indexOf(enemy);
            // console.log(index)
            let bulletIndex = bullets.indexOf(bullet);
            enemies.splice(enemyIndex, 1);
            bullets.splice(bulletIndex, 1);
            let newEnemy = {
               x: random(0, width),
               y: random(-800, 0)
            }
            enemies.push(newEnemy);
            score++;
          }
      }
   }
   
text(score, 25, 25)

}



   }
   




   function mousePressed() {
      //spawn a bullet when you clicks
      song.play();
      console.log("it's clicked");
   
      let bullet = {
         x: mouseX,
         y: mouseY 
      }
      bullets.push(bullet)
    }



//draw the player
//bullet
//bullets spawn on click
//enemies
//collisions
//score
//lose game


//prettify
//health
//powerups
//limit bullet number
//increase speed
//increase enemy number
//different type of enemies
//change enemy movement
//highscore
//

//Instructions
function game() {
    window.location.href="https://masonl04.github.io/game.html"
}
//Game
var w = window.innerWidth
var h = window.innerHeight
var player;
var boing;
var pillar;
var pillar2;
var pillar3;
var pillar4;
var pillar5;
var hit = false;
var timer = 0;
function setup() {
    createCanvas(w,h)
    player = new player();
    pillar = new pillar();
    pillar2 = new pillar2();
    pillar3 = new pillar3();
    pillar4 = new pillar4();
    pillar5 = new pillar5();
}
function draw() {
    clear();
    player.show();
    player.update();
    //pillar 1
    pillar.show();
    pillar.update();
    pillar.collide(player);
    //pillar 2
    pillar2.show();
    pillar2.update();
    pillar2.collide(player);
    //pillar 3
    pillar3.show();
    pillar3.update();
    pillar3.collide(player);
    //pillar 4
    pillar4.show();
    pillar4.update();
    pillar4.collide(player);
    //pillar 5
    pillar5.show();
    pillar5.update();
    pillar5.collide(player);
    timer = (millis()/1000).toFixed()
    if (millis() >= 1 + timer){
        timer =  millis()
        document.getElementById('score').innerHTML = (timer/1000).toFixed() + " seconds"
    }
}
function player() {
    this.x = 25;
    this.y = h/2;
    this.show = function() {
        fill(color('white'));
        ellipse(this.x,this.y,50,50);   
    }
    this.update = function() {
        if((keyIsDown(65)) && (this.x>35)) {
            this.x -= 7;
        }
        if((keyIsDown(68)) && (this.x<w-50)) {
           this.x += 7;
        }  
        if ((keyIsDown(87)) && (this.y>30)) {
            this.y -= 7;
        }
        if ((keyIsDown(83)) && (this.y<h-40)) {
            this.y += 7
        }
    }
}
function pillar() {
    this.x = w;
    this.y = random(0,h/2);
    this.w = 200;
    this.h = random(100,200);
    this.s = 10;
    this.show = function() {
        fill(color('#5ad0f8'));
        rect(this.x,this.y,this.w,this.h)
    }
    this.update = function() {
        if (this.x>10) {
            this.x -= this.s;
        }
        if (this.x<10) {
            this.x = w;
            this.h = random(100,200);
            this.y = random(0,h/2);
            this.s = random(10,20);
        } 
    }
    this.collide = function(player){
        this.hit = collideRectCircle(this.x,this.y,this.w,this.h,player.x,player.y,25);
        if(this.hit){
            localStorage.setItem("time",timer)
            player.x = 0;
            document.location.href="gameover.html"
        }
    }
}
function pillar2() {
    this.x = w+300;
    this.y = random(0,h/2);
    this.w = 200;
    this.h = random(100,200);
    this.s = 10;
    this.show = function() {
        fill(color('#5ad0f8'));
        rect(this.x,this.y,this.w,this.h)
    }
    this.update = function() {
        if (this.x>10) {
            this.x -= this.s;
        }
        if (this.x<10) {
            this.x = w;
            this.h = random(100,200);
            this.y = random(0,h/2);
            this.s = random(10,20);
        } 
    }
    this.collide = function(player){
        this.hit = collideRectCircle(this.x,this.y,this.w,this.h,player.x,player.y,25);
        if(this.hit){
            localStorage.setItem("time",timer)
            player.x = 0;
            document.location.href="https://masonl04.github.io/gameover.html"
        }
    }
}
function pillar3() {
    this.x = w+600;
    this.y = random(0,h/2);
    this.w = 200;
    this.h = random(100,200);
    this.s = 10;
    this.show = function() {
        fill(color('#5ad0f8'));
        rect(this.x,this.y,this.w,this.h)
    }
    this.update = function() {
        if (this.x>10) {
            this.x -= this.s;
        }
        if (this.x<10) {
            this.x = w;
            this.h = random(100,200);
            this.y = random(0,h/2);
            this.s = random(10,20);
        } 
    }
    this.collide = function(player){
        this.hit = collideRectCircle(this.x,this.y,this.w,this.h,player.x,player.y,25);
        if(this.hit){
            localStorage.setItem("time",timer)
            player.x = 0;
            document.location.href="https://masonl04.github.io/gameover.html"
        }
    }
}
function pillar4() {
    this.x = w+900;
    this.y = random(h/2,h-200);
    this.w = 200;
    this.h = random(100,200);
    this.s = 10;
    this.show = function() {
        fill(color('#5ad0f8'));
        rect(this.x,this.y,this.w,this.h)
    }
    this.update = function() {
        if (this.x>10) {
            this.x -= this.s;
        }
        if (this.x<10) {
            this.x = w;
            this.h = random(100,200);
            this.y = random(h/2,h-200);
            this.s = random(10,20);
        } 
    }
    this.collide = function(player){
        this.hit = collideRectCircle(this.x,this.y,this.w,this.h,player.x,player.y,25);
        if(this.hit){
            localStorage.setItem("time",timer)
            player.x = 0;
            document.location.href="https://masonl04.github.io/gameover.html"
        }
    }
}
function pillar5() {
    this.x = w+1200;
    this.y = random(h/2,h-200);
    this.w = 200;
    this.h = random(100,200);
    this.s = 10;
    this.show = function() {
        fill(color('#5ad0f8'));
        rect(this.x,this.y,this.w,this.h)
    }
    this.update = function() {
        if (this.x>10) {
            this.x -= this.s;
        }
        if (this.x<10) {
            this.x = w;
            this.h = random(100,200);
            this.y = random(h/2,h-200);
            this.s = random(10,20);
        } 
    }
    this.collide = function(player){
        this.hit = collideRectCircle(this.x,this.y,this.w,this.h,player.x,player.y,25);
        if(this.hit){
            localStorage.setItem("time",timer)
            player.x = 0;
            document.location.href="https://masonl04.github.io/gameover.html"
        }
    }
}
//gameover
function gameover() {
    var score = localStorage.getItem('time')
    document.getElementById('FinalScore').innerHTML = (score/1000).toFixed() + " seconds"
}
function playAgain() {
    window.location.href="https://masonl04.github.io/index.html"
}
window.onload = function() {
    gameover();
}

window.onload = function (){
    var c = document.querySelector("canvas");
    var canvas= document.querySelector("canvas");
    c.width = innerWidth;
    c.height = innerHeight;
    c = c.getContext("2d");

    function startGame () {
        mouse = {
            x : innerHeight/2,
            y : innerHeight-33
        };

        touch = {
            x : innerWidth/2,
            y : innerHeight-33
        };

        canvas.addEventListener("mousemove" , function(event){
            mouse.x = event.clientX;
        });

        canvas.addEventListener("touchmove", function(event){
            var rect = canvas.getBoundingClientRect();
            var root = document.documentElement;
            var touch = event.changedTouches();
            var touchX = parseInt(touch.clientX);
            var touchY = parseInt(touch.clientY) - rect.top - root.scrollTop;
            event.preventDefault();
            mouse.x = touchX;
            mouse.y = touchY;

        });
        var player_width = 32;
        var player_height = 32;
        var playerImg  =  new Image();
        var score = 0;
        var health = 100;
        playerImg.src = "Jump.png";
    
        var _bullets = [];
        var bullet_width = 6;
        var bullet_height = 8;
        var bullet_speed = 10;

        var _enemies = [];
        var enemyImg = new Image();
        enemyImg.src = "";
        var enemy_width =32;
        var enemy_height = 32;

        var _healthkits = [];
        var healthkitImg = new Image();
        healthkitImg.src = "";
        var healthkit_width = 32;
        var healthkit_height = 32;

        function Player(x, y, width, height, speed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.speed = speed;

            this.draw = function(){
                c.beignPath();
                c.drawImage(enemyImg, this.x, this.x);
            }

            this.update = function() {
                this.y += this.speed;
                this.draw();
            };
        }
        function Healthkit(x, y, width, height, speed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.speed = speed;

            this.draw = function(){
                c.beignPath();
                c.drawImage(healthkitImg, this.x, this.y);
            };

            this.update = function(){
                this.y += this.speed;
                this.draw();
            }
        }

        var __player = new Player(mouse.x, mouse.y, player_width, player_height);

        function drawEnemies(){
            for(var _ =0; _<4; _++){
                var x = Math.random()*(innerWidth-enemy_width);
                var y = -enemy_height;
                var width = enemy_width;
                var height = enemy_height;
                var speed = Math.random()*2;
                var __enemy = new enemy(x, y, width, height, speed);
                _enemies.push(__enemy);   
            }
        }setInterval(drawEnemies, 1234);

        function drawHealthkits(){
            for(var _ =0; _<4; _++){
                var x = Math.random()*(innerWidth-enemy_width);
                var y = -enemy_height;
                var width = healthkit_width;
                var height = healthkit_width;
                var speed = Math.random()*2.6;
                var __enemy = new Healthkit(x, y, width, height, speed);
                _enemies.push(__enemy);   
            }
        }
    }
}
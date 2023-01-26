class SlingShot {
    constructor() {
        this.x = 120;
        this.y = windowHeight- 320;
        this.width = 1;
        this.height = 50;
        this.slingX = this.x;
        this.slingY = this.y - (this.height)/2 - 20;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);

        this.allowShoot = false;
        this.Balls = [];
        this.sling;
        this.currentBall = -1;
        this.dragBall = false;
        this.remove = false;
    }

    setSlingShot(){

        this.Balls.push(new Stone(this.slingX, this.slingY));
        this.currentBall += 1;

        this.Balls[this.currentBall].setProperties();
        this.sling = Matter.Constraint.create({
            pointA: { x: this.slingX, y: this.slingY },
            bodyB: this.Balls[this.currentBall].body,
            stiffness: 0.02
        });


         World.add(engine.world, [this.Balls[this.currentBall].body]);
    }

    toStatic(val){
        if (this.currentBall > -1)
        this.Balls[this.currentBall].body.isStatic = val;
    }

    moveBall(X, Y){
        if(this.dragBall && (this.currentBall > -1)){
            Matter.Body.set(this.Balls[this.currentBall].body, "position", {x: 2*X-300, y: 2*Y});
            this.allowShoot = true;
        }
    }

    shoot(){
        this.toStatic(false);
        this.allowShoot = false;
        this.dragBall = false;
        this.Balls.push(new Stone(this.slingX, this.slingY));
        this.currentBall += 1;
        this.Balls[this.currentBall].setProperties();

        setTimeout(() =>{
            World.add(engine.world, this.Balls[this.currentBall].body);
            this.sling.bodyB = this.Balls[this.currentBall].body;
        }, 100);

    }

    handOverBall(X, Y){
        var rad = 30; //Change later

        let bx = this.Balls[this.currentBall].body.position.x;
        let by = this.Balls[this.currentBall].body.position.y;

        let d = Math.sqrt((X-bx)**2 + (Y-by)**2);

        if (d<=rad){
             this.dragBall = true;
        }
        return d<=rad;
    }

    checkCollision(){
        for(var i= 0; i <= this.currentBall; i++){
            if(Matter.SAT.collides(this.Balls[i].body, ground.body).collided){
                this.Balls[i].body.render.sprite.texture = explodeImage;
                this.Balls[i].body.render.sprite.yScale = 0.5;
                this.Balls[i].body.render.sprite.xScale = 0.5;
                let ball = this.Balls[i].body;

                setTimeout(function (){
                    World.remove(engine.world, ball);
                }, 20);

                this.Balls.splice(i,i);
                this.currentBall = this.Balls.length-1;
            }
        }
    }

    checkEnemyCollision(){
        for(var i= 0; i <= this.currentBall; i++){
            for(var j=0; j< zombies.length; j++) {
                if (Matter.SAT.collides(this.Balls[i].body, zombies[j].body).collided) {

                    this.Balls[i].body.render.sprite.texture = explodeImage;
                    this.Balls[i].body.render.sprite.yScale = 0.5;
                    this.Balls[i].body.render.sprite.xScale = 0.5;
                    let ball = this.Balls[i];

                    if (ball.damageKardiya === false){
                        console.log("Collided with Enemy");
                          zombies[i].update_Health();
                          zombie_health_bar[j].update_health(50);
                          index = zombie_health_bar[j].check_health();
                          zombie_health_bar[j].update_img(index);
                        ball.damageKardiya = true;
                    }
                    setTimeout(function (){
                        World.remove(engine.world, ball.body);
                    }, 20);

                    this.Balls.splice(i,i);
                    this.currentBall = this.Balls.length-1;

                }
            }
            for(var j=0; j< wave2_mons.length; j++) {
                if (Matter.SAT.collides(this.Balls[i].body, wave2_mons[j].body).collided) {

                    this.Balls[i].body.render.sprite.texture = explodeImage;
                    this.Balls[i].body.render.sprite.yScale = 0.5;
                    this.Balls[i].body.render.sprite.xScale = 0.5;
                    let ball = this.Balls[i];

                    if (ball.damageKardiya === false){
                        console.log("Collided with Enemy");
                          wave2_mons[i].update_Health();
                          wave2_health_bar[j].update_health(50);
                          index = wave2_health_bar[j].check_health();
                          wave2_health_bar[j].update_img(index);
                        ball.damageKardiya = true;
                    }
                    setTimeout(function (){
                        World.remove(engine.world, ball.body);
                    }, 20);

                    this.Balls.splice(i,i);
                    this.currentBall = this.Balls.length-1;

                }
            }
        }
    }


    setProperties(){
        this.body.isStatic = true;
        this.body.collisionFilter.mask = 0;
        let sprite = this.body.render.sprite
        sprite.texture = slingImage;
        this.body.collisionFilter.mask = 0;
        sprite.xScale = 0.28;
        sprite.yScale =0.28;
        this.body.friction = 0.03;

    }
    
    show(){
        World.add(engine.world, [this.body, this.sling]);
    }

}
class Tower{
    constructor() {
        this.x = 270;
        this.y = windowHeight- 160
        this.w = 100;
        this.h = 190;
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    }

    setProperties(){
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = towerImage;
        sprite.xScale = 1;
        sprite.yScale = 1.1;
        this.body.friction = 0.03;
    }

    move(){


        Body.applyForce(this.body,
            {
            x: this.body.position.x+5000,
            y: this.body.position.y
            },
            {
                x:0.3,
                y:0
            }

        );
    }

    show(){
        World.add(engine.world, this.body);
    }
}


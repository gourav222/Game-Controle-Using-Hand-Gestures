class Enemy{
    constructor(x) {
        this.x = 800;
        this.y = 600-150;
        this.w = 100;
        this.h = 190;
        this.speed = Math.random() * 0.2 + 0.4;
        this.movement = this.speed;
        this.health = 100;
        this.maxHealth = this.health;
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    }
    setProperties(){
        this.body.isStatic = false;
        // let sprite = this.body.render.sprite
        // //sprite.texture = towerImage;
        // sprite.xScale = 1;
        // sprite.yScale = 1
    }
    move(){
        Body.applyForce(this.body,
            {
            x: 0,
            y: windowHeight-100
            },
            {
                x:0.8,
                y:0
            }

        );
        Matter.Body.set(this.body, "position", {x: this.body.position.x-1, y: this.body.position.y})
    }

    show(){
        World.add(engine.world, this.body);
    }
}

 
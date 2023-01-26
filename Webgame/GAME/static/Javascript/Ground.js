class Ground{
    constructor() {
        this.x = 1000;
        this.y = windowHeight-50;
        this.w = 500000;
        this.h = 0.1;

        this.body = Matter.Bodies.rectangle(this.x, this.y, 2*this.w, this.h);
    }

    setProperties(){
        this.body.isStatic = true;
       /* let sprite = this.body.render.sprite
        sprite.texture = groundImage;   
        sprite.xScale = 2;
        sprite.yScale = 0.7;
        this.body.friction = 3;
        //Body.rotate(this.body, -0.04);*/
    }

    show(){
        World.add(engine.world, this.body);
    }
}

class Weapon{
    constructor() {
        this.x = 200;
        this.y = windowHeight;
        this.w = windowWidth;
        this.h = 100;

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    }

    setProperties(){
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = ballImage;
        sprite.xScale = 4;
        sprite.yScale = 2.2
    }

    show(){
        World.add(engine.world, this.body);
    }
}
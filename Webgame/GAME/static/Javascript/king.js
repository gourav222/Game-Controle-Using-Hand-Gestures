class King{
    constructor(){
        this.body = Matter.Bodies.rectangle(350, windowHeight- 95, 50, 50);
        this.body.isStatic = true;
        this.power = 10;
        this.health = 1000;
    }

    setProperties_King(){
        let sprite = this.body.render.sprite
        sprite.texture = King_arr[2];
        sprite.xScale = 0.4;
        sprite.yScale = 0.3;
       
    }

    update_img(i){
        let sprite = this.body.render.sprite
        sprite.texture = King_arr[i];
    }

    get_Power(){
        return this.power;
    }
    get_Health(){
        return this.health;
    }

    remove(){
        World.remove(engine.world, this.body);
    }
    show(){
        World.add(engine.world, this.body);
    }
}    
class zombie{
    constructor(x){
        this.x = x;
        this.y = windowHeight- 150;
        this.health = 100;
        this.power = 0.1;
        this.body = Matter.Bodies.rectangle(this.x, this.y, 50, 50);
        this.body.isStatic = false;
    }
    setProperties(){
        let sprite = this.body.render.sprite;
        sprite.texture = zombie_img[0];
        sprite.xScale = 0.2;
        sprite.yScale = 0.15;
        this.body.friction = 0.03;
    }
    move(){
        Matter.Body.set(this.body, "position", {x: this.body.position.x-1, y: this.body.position.y})
    }
    update_img(i){
        let sprite = this.body.render.sprite;
        sprite.texture = zombie_img[i];
    }
    position_enemy(){
        return this.body.position.x;
    }  
    remove_enemy(){
        World.remove(engine.world,this.body);
    }
    update_Health(){
        this.health -= 1;
    }
    get_Power(){
        return this.power;
    }
    
    check_Health(){
        return this.health;
    }
    show(){
        World.add(engine.world, this.body);
    }
}    
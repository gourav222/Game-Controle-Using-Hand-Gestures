class health_Bar{
    constructor(x, y,health){
        this.y = y;
        this.x = x;
        this.body = Matter.Bodies.rectangle(this.x,this.y,0.01,0.01);
        this.body.isStatic = true;
        this.health = health;
        this.total_health = this.health
        this.body.collisionFilter = {
            'group': -1,
            'category': 2,
            'mask': 0,
          };
    }
    
    setProperties(){
        let sprite = this.body.render.sprite
        sprite.texture = bar1;
        sprite.xScale = 0.15;
        sprite.yScale = 0.12;
       
    }
    move(xx){
        Matter.Body.set(this.body, "position", {x: xx, y: this.body.position.y})
    }
    position_enemy(){
        return this.body.position.x;
    }
    update_health(power){
        this.health -= power;
        
    }
    remove_health_Bar(){
        World.remove(engine.world,this.body);
    }
    
    check_health(){
        let per = (this.health/this.total_health) * 100;
        if(per >= 81 ){
            return 0;
        }
        else if(per <= 80 && per >= 66){
            return 1;
        }
        else if(per <= 65 && per >= 46){
            return 2;
        }
        else if(per <= 45 && per >= 31){
            return 3;
        }
        else if(per <= 30 && per >= 16){
            return 4;
        }
        else if(per <= 15){
            return 5;
        }
    }

    update_img(i){
        let sprite = this.body.render.sprite
        sprite.texture = bar[i]
    }
    show(){
        World.add(engine.world, this.body);
    }
}
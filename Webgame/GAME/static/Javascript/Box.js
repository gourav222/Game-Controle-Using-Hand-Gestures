class Box{
    constructor(x, health,y=500, w = 50, h = 50, color, _static, img, res){
        this.body = Matter.Bodies.rectangle(x, y,w, h);
        this.health = 100;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.img = img;
        this.body.isStatic = _static;
    }
    setProperties(m3){
        let sprite = this.body.render.sprite;
        
        if(m3 === 0){
            sprite.texture = monster16;
        }
        if(m3 === 7){
            sprite.texture = monster17;
        }
        if(m3 === 14){
            sprite.texture = monster18;
        }
        sprite.xScale = 0.5;
        sprite.yScale = 0.3;
        this.body.friction = 0.03;
    }
    setProperties2(m){
        let sprite = this.body.render.sprite;
        
        if(m === 0){
            sprite.texture = monster13;
        }
        if(m === 7){
            sprite.texture = monster14;
        }
        if(m === 14){
            sprite.texture = monster15;
        }
        sprite.xScale = 0.5;
        sprite.yScale = 0.3;
        this.body.friction = 0.03;
    }
    setProperties3(m2){
        let sprite = this.body.render.sprite;
        
        if(m2 === 0){
            sprite.texture = monster10;
        }
        if(m2 === 7){
            sprite.texture = monster11;
        }
        if(m2 === 14){
            sprite.texture = monster12;
        }
        sprite.xScale = 0.2;
        sprite.yScale = 0.15;
        this.body.friction = 0.03;
    }
    
    setProperties_King(i){
        let sprite = this.body.render.sprite
        sprite.texture = King_arr[i];
        sprite.xScale = 0.4;
        sprite.yScale = 0.3;
        this.body.friction = 0.03;
    }
    
    show(){
        World.add(engine.world, this.body);
    }
    move(){
        Matter.Body.set(this.body, "position", {x: this.body.position.x-1, y: this.body.position.y})
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
    check_Health(){
        return this.health;
    }
   
}

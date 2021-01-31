class Box{
    constructor(x,y,width,height){
        var options={
            restitution: 0.5,
        }
        
        this.box = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }
    display(){
        var pos = this.box.position
        var angle = this.box.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}
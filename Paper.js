class Paper {
    constructor(x,y,radius){
     var options ={
        isStatic: false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }  
    this.image = loadImage("paper.png")
    this.body = Bodies.circle(x,y, 25, options);
    this.x = x;
    this.y = y;
    this.r = radius;
    //this.radius = 25;
    
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    fill("purple");
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
}
};
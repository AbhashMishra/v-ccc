class paper {
    constructor() {
        var options ={
            isStatic : false,
            'density' : 1.5,
            'friction' : 2.9,
            'restitution' : 0.2
        }
        this.r = radius;
        this.body = Matter.Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        textSize(50);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        circle(0,0,this.r,this.p);
        pop();
    }
}
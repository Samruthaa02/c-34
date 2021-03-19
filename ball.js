class Ball{
    constructor(){
        var options={
            density:1,
            frictionAir:0.05
     }
     this.ball=Bodies.circle(530,400,150/2,options);
     this.x=530;
     this.y=400;
     this.radius=150;
     World.add(world,this.ball);
    }
    display(){
        var pos=this.ball.position;

        ellipseMode(CENTER);
        fill("pink")
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
    }
}
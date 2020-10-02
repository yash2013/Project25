class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          density:1.2,
          friction:0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = this.radius;
    
      World.add(world, this.body);
      this.image=loadImage(sprites/paper1.png)
    }
    display(){
      var pos =this.body.position;
      push()
     ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius );
      pop()
    }
  };
class Box{
    constructor(x,y){

         var options = {
        
        restitution: 0,
        friction: 3
    }

    this.body = Bodies.rectangle(x, y, 35, 50, options);  
    World.add(world, this.body);
  }
  display(color){
    var pos = this.body.position
    push();
    fill(color)
    rectMode(CENTER);
    rect(pos.x,pos.y,35,50);
    pop();
  }
}
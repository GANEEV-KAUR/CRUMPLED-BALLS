class Paper{
   constructor(){

    var options = {
    'density' :4,
   'friction' : 1.0,
    'restitution' : 0.5,
       }
     
   this.body = Bodies.rectangle(200,250,50,50);
   this.paperImage = loadImage("paper.png");
     World.add(world,this.body);
     }

      display(){

       imageMode(CENTER);
       image(this.paperImage,this.body.position.x,this.body.position.y,100,100);
      }
   
}

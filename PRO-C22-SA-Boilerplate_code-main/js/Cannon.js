class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.base = loadImage ("assets/cannonBase.png")
    this.atirador = loadImage ("assets/canon.png")
  }
  display (){
     push ()
     imageMode (CENTER)
     image (this.atirador, this.x,this.y,this.width, this.height);
     pop ()
    image (this.base, 70,20,200,200)
    noFill ()

  }
}
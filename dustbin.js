class Dustbin {
constructor(x,y,width,height){
 var options={
  isStatic:true,
  restitution:0,
  density:2,
  friction:1
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
}
display(){
var pos = this.body.position 
var angle=this.body.angle

push();
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill(225)
stroke("blue")
rect(0,0,this.width,this.height)
pop ();
}



}
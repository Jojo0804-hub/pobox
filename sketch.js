var b1
var b2
function setup() 
{
  createCanvas(400, 400);
  b1=new Box(3,4,100,200)
  b2=new Box(1,3,200,100)
}

function draw() 
{
  background(220);
  b1.display()
  b2.display()

}


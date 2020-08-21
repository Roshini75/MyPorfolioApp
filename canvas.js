const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
c.fillText("Hello, I'm Roshini Tadi", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Ball {
  constructor(x, y,dx,dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    //c.stroke()
  }

  update() {
    
    this.draw();
    this.x+=this.dx
    this.y+=this.dy
    if(this.x > canvas.width || this.x-this.radius<0){
      this.dx=-this.dx
    }
    if(this.y > canvas.height || this.y-this.radius<0){
      this.dy=-this.dy
    }
    
  }
}

//var ball = new Ball(100,100,5,5,20,'red');
// Implementation
var colorArray =['#ffbc42','#d81159','#8f2d56','#218380','#73d2de'];
let objects
function init() {
  objects = []

  for (let i = 0; i < 100; i++) {
    var xcor = Math.random()*canvas.width;
    var ycor = Math.random()*canvas.height;
    var dx = (Math.random()-0.5)*8;
    var dy = (Math.random()-0.5)*8;
    var color = colorArray[Math.floor(Math.random()*colorArray.length)]
    var ball = new Ball(xcor,ycor,dx,dy,2,color);
     objects.push(ball);
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  //c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  
  //ball.update();
   objects.forEach(object => {
    object.update()
   })
}

init()
animate()
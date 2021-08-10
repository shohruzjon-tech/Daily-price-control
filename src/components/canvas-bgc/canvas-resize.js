import React from 'react';





const Canvasresize = () => {

 var canvasRef=React.useRef();

 React.useEffect(()=>{
    canvasRef.current.width=window.innerWidth
    canvasRef.current.height=window.innerHeight
    var c=canvasRef.current.getContext('2d');

    
    function Circle(x, y, dx, dy, radius, color){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.radius=radius;
        this.color=color;

        this.draw=function(){
            c.strokeStyle=this.color
            c.beginPath()
            c.arc(this.x, this.y, this.radius,0, Math.PI*2, false)
            c.stroke()
        }

        this.update=function(){
            this.draw()
            if(this.x + this.radius>window.innerWidth || this.x-this.radius < 0){
                this.dx=-this.dx
            }
    
            if(this.y+this.radius>window.innerHeight || this.y-this.radius<0){
                this.dy=-this.dy
            }
    
            this.x+=this.dx
            this.y+=this.dy
        }
        
    }

     var circleArray=[];

   for(var i=0; i<50; i++ ){
    var radius=30;
    var x=Math.random()*(window.innerWidth-radius*2)+radius;
    var y=Math.random()*(window.innerHeight-radius*2)+radius;
    var dx=(Math.random() - 0.5);
    var dy=(Math.random() - 0.5);
    const colors = [ 'blue', 'yellow', 'orange', 'red' ];
    const randIndex = Math.floor(Math.random() * colors.length);
     circleArray.push(new Circle(x, y, dx, dy, radius, colors[randIndex]))
   }

    function animate(){
        requestAnimationFrame(animate)
        c.clearRect(0, 0,  window.innerWidth, window.innerHeight)

        for (var i=0; i<circleArray.length; i++){
             circleArray[i].update()
        }

    }
 
     animate()
 },[])

    return (
        <div>
            <canvas ref={canvasRef} style={{background:"#ffffff"}}></canvas>
        </div>
    );
}

export default Canvasresize;

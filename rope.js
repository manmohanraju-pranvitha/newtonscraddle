class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX=offsetX;
       this.offsetY=offsetY;
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
          pointB:{x:this.offsetX,y:this.offsetY},
          
            
        }
        
        
        

        this.rop=Constraint.create(option);
        World.add(world,this.rop);
    }
    
    display(){
      var pointA=this.rop.bodyA.position;
        var pointB=this.rop.bodyB.position;
      
        if(this.rop.bodyA){

        
       // var pointA=this.rop.bodyA.position;
       // var pointB=this.rop.bodyB.position;
        
        var offsetA = pointB.x + this.offsetX;
        var offsetB = pointB.y + this.offsetY;
         strokeWeight(2); 
          line(pointA.x,pointA.y,offsetA,offsetB);
        }
     
}
}
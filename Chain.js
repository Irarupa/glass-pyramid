class Chain{
    constructor(object1, point){
        var options = {
            bodyA: object1,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }


    break(){
        this.chain.bodyA = null;
    }
    
}



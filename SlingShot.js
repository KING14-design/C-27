class SlingShot{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:80
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        var point1 = this.sling.bodyA.position
        var point2 = this.sling.bodyB.position
        line(point1.x,point1.y,point2.x,point2.y)
    }
}

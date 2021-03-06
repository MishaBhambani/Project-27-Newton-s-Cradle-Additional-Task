class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB: {x: this.offsetX, y: this.offsetY}
        }

        engine.world.gravtiyY = 50;

        this.body = Constraint.create(options);
        World.add(world, this.body);
    }


    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        push();
        strokeWeight(2);
        stroke("#F1699B");

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        pop();
    }
}
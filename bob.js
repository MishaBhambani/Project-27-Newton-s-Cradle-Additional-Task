class Bob{
    constructor(x, y, diameter){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 2,
            density: 1.2,
            velocityX: -5
        }
        this.body = Bodies.circle(x, y, diameter, options);
        World.add(world, this.body);
        this.diameter = diameter;

        engine.world.gravtiyY = 50;
    }

    display(){
       ellipseMode(RADIUS);
       fill("#A700EF");
       ellipse(this.body.position.x, this.body.position.y, this.diameter, this.diameter); 
    }
}
class Tree{
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,
            collisionFilter: {category: 1, mask: 4294967295, group: -1}
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.jpg");
        World.add(world,this.body);

    }
    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
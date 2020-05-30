class Thor{
    constructor(){
        this.visibility = true;
        this.life = 2;
        this.x = 200;
        this.y = 500;
        this.width = 50;
        this.height = 200;

    }

display(){
createSprite(this.x,this.y,this.width,this.height);
if(keyDown(RIGHT_ARROW)){
    this.x = this.x + 2;
}
if(keyDown(LEFT_ARROW)){
    this. x= this.x - 2;
}
}
}
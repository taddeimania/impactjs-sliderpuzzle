ig.module(
    'game.entities.mainBlock'
).requires(
    'impact.entity'
).defines(function(){

EntityMainBlock = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/mainblock.png', 32, 16 ),
    size: {x: 32, y:16},
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.BOTH,
    collides: ig.Entity.COLLIDES.FIXED,
    imClicked: function () {
        return MyGame.mouseOn === this.id;
    },
    clickOnMe: function () {
        return ig.input.pressed('click')
            && (ig.input.mouse.y > this.pos.y
            && ig.input.mouse.y < this.pos.y + this.size.y)
            && (ig.input.mouse.x > this.pos.x
            && ig.input.mouse.x < this.pos.x + this.size.x);
    },
    init: function (x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('idle', 1, [0]);
    },
    update: function(){
        if (this.clickOnMe()){
            MyGame.mouseOn = this.id;
            this.collides = ig.Entity.COLLIDES.LITE;
        } else if (ig.input.released('click')){
            MyGame.mouseOn = 0;
            this.collides = ig.Entity.COLLIDES.FIXED;
        }
        this.setVelocity();
        this.parent();
    },
    setVelocity: function () {
        if (this.imClicked()){
            var dif = ((ig.input.mouse.x - (this.size.x / 2)) - this.pos.x).round();
            if (dif > 0){
                this.vel.x = 1;
            } else if (dif < 0){
                this.vel.x = -1;
            } else {
                this.vel.x = 0;
            }
            if (dif < -this.size.x || dif > this.size.x){
                MyGame.mouseOn = 0;
            }
        }
    },
    handleMovementTrace: function(res){
        if( !res.collision.x && this.imClicked()){
            var xTile = (ig.input.mouse.x / this.size.y).round();
            var newpos = (xTile * this.size.y) - this.size.y;
            if (newpos > 96 && !(this.pos.x >= 96 && this.pos.y == 64)){
                newpos = 96;
            } else if (newpos < 32){
                newpos = 32;
            }
            this.pos.x = newpos;
        }
    }
});


});
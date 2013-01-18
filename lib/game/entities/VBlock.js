ig.module(
    'game.entities.VBlock'
).requires(
    'impact.entity',
    'game.entities.mainBlock'
).defines(function(){

EntityVBlock = EntityMainBlock.extend({
    animSheet: new ig.AnimationSheet( 'media/2Vblock.png', 16, 32 ),
    size: {x: 16, y:32},
    init: function (x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('idle', 1, [0]);
    },
    setVelocity: function () {
        if (this.imClicked()){
            var dif = (ig.input.mouse.y - this.size.x) - this.pos.y;
            if (dif > 0){
                this.vel.y = 1;
            } else if (dif < 0){
                this.vel.y = -1;
            } else {
                this.vel.y = 0;
            }
            if (dif < -this.size.y || dif > this.size.y){
                MyGame.mouseOn = 0;
            }
        }
    },
    handleMovementTrace: function(res){
        if( !res.collision.y && this.imClicked()){
            var yTile = (ig.input.mouse.y / this.size.x).round();
            this.pos.y = (yTile * this.size.x) - this.size.x;
        }
    }
});


});
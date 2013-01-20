ig.module(
    'game.entities.3HBlock'
).requires(
    'impact.entity',
    'game.entities.mainBlock'
).defines(function(){

Entity3HBlock = EntityMainBlock.extend({
    animSheet: new ig.AnimationSheet( 'media/3Hblock.png', 48, 16 ),
    size: {x: 48, y:16},
    handleMovementTrace: function(res){
        if( !res.collision.x && this.imClicked()){
            var xTile = (ig.input.mouse.x / this.size.y).round();
            var newpos = (xTile * this.size.y) - this.size.y;
            if (newpos > 80){
                newpos = 80;
            } else if (newpos < 32){
                newpos = 32;
            }
            this.pos.x = newpos;
        }
    }
});

});
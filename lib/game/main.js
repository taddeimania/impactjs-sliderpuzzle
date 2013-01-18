ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'game.levels.board1',
    'game.levels.board2'
)
.defines(function(){

MyGame = ig.Game.extend({
    mouseOn: 0,

	init: function() {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        this.loadLevel( LevelBoard2 );
	},
	
	update: function() {
		this.parent();
		
	},
	
	draw: function() {
		this.parent();
	}
});

ig.main( '#canvas', MyGame, 60, 128, 128, 2 );

});

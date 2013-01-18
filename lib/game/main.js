ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'game.levels.board1',
    'game.levels.board2',
    'game.levels.board3',
    'game.levels.board4',
    'game.levels.board5',
    'game.levels.board6',
    'game.levels.board7'
)
.defines(function(){

MyGame = ig.Game.extend({
    mouseOn: 0,
	init: function() {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        this.loadLevel( LevelBoard1 );
	},
	
	update: function() {
		this.parent();

	},
	
	draw: function() {
		this.parent();
	}
});

StartScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/04b03.font.png' ),
//    background: new ig.Image('media/screen-bg.png'),
    title: new ig.Image('media/logo.png'),
    init: function() {
        ig.input.bind( ig.KEY.MOUSE1, 'start');
    },
    update: function() {
        if(ig.input.pressed ('start')){
            ig.system.setGame(MyGame)
        }
        this.parent();
    },
    draw: function() {
        this.parent();
//        this.background.draw(0,0);
        this.title.draw(ig.system.width - this.title.width, 0);
        var x = ig.system.width/2,
            y = ig.system.height - 10;
        this.instructText.draw( 'Free the white block', x, y - 40, ig.Font.ALIGN.CENTER );
        this.instructText.draw( 'Click Anywhere To Start', x, y - 10, ig.Font.ALIGN.CENTER );
    }
});

ig.main( '#canvas', StartScreen, 60, 128, 128, 3 );

});

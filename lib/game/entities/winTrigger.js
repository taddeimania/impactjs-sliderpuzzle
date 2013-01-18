ig.module(
    'game.entities.winTrigger'
).requires(
    'impact.entity',
    'game.entities.mainBlock'
).defines(function(){

EntityWinTrigger = ig.Entity.extend({
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(0, 0, 255, 0.7)',
    size: {x: 16, y: 16},
    checkAgainst: ig.Entity.TYPE.A,
    level: null,

    update: function () {},

    check: function (other) {
        if (other instanceof EntityMainBlock){
            ig.game.loadLevelDeferred(ig.global['Level' + levelName]);
        }
    }
});


});
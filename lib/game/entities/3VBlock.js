ig.module(
    'game.entities.3VBlock'
).requires(
    'impact.entity',
    'game.entities.VBlock'
).defines(function(){

Entity3VBlock = EntityVBlock.extend({
    animSheet: new ig.AnimationSheet( 'media/3Vblock.png', 16, 48 ),
    size: {x: 16, y:48}
});

});
ig.module(
    'game.entities.HBlock'
).requires(
    'impact.entity',
    'game.entities.mainBlock'
).defines(function(){

EntityHBlock = EntityMainBlock.extend({
    animSheet: new ig.AnimationSheet( 'media/2Hblock.png', 32, 16 ),
    size: {x: 32, y:16}
});


});
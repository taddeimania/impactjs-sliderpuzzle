ig.module(
    'game.entities.3HBlock'
).requires(
    'impact.entity',
    'game.entities.mainBlock'
).defines(function(){

Entity3HBlock = EntityMainBlock.extend({
    animSheet: new ig.AnimationSheet( 'media/3Hblock.png', 48, 16 ),
    size: {x: 48, y:16}
});

});
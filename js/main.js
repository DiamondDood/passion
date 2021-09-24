var config = {
    type: Phaser.AUTO,
    width: BANBarrage.constants.WIDTH,
    height: BANBarrage.constants.HEIGHT,
    backgroundColor: "#5E81A2",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: BANBarrage.constants.GRAVITY },
            debug: false
        }
    },
    scene: [TitleScene, LevelSceneIntro, Level1Scene, BossScene, BossSceneIntro, BossSceneIntro2, EndScene]
};

// Don't allow right click menu
document.addEventListener('contextmenu', event => event.preventDefault());

var BANBarrage = BANBarrage || {};
BANBarrage.game = new Phaser.Game(config);
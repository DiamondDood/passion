class Level1Scene extends LevelParentScene {
    constructor() {
        super({key:"Level1Scene"});
    }

    preload() {
        super.preload();
        this.load.tilemapTiledJSON("map", "tiled/mainlevel.json");
        //this.load.audio('levelmusic', 'assets/sound/Written-in-the-Genes.mp3');
        this.load.image('goal', 'assets/wildcat.png');
        this.load.image('shawn', 'assets/shawn.png');
        this.load.image('ifstatement', 'assets/ifstatement.png');
    }

    create() {
        super.create("map");
        this.game.timer.startTimer();

        this.cameras.main.setBounds(0, 0, 4800, 100);
        this.physics.world.setBounds(0, 0, 4800, 240);
        
        //this.levelmusic = this.sound.add('levelmusic', {loop: "true"});
        //this.levelmusic.play();
        
        this.setupStars();
    }

    setupStars() {
        this.totalStars = 0;
            //       X   Y  •
        this.addstar(200,300, 80, 100, ["My Personal Passion", "By Bryce Goertzen", "Coding!!!"]);
        this.addstar(515,200, 445, 100, ["What You Need", "• Teacher or youtube video", "• Computer", "• keyboard", "• Mouse"]);
        this.addstar(1000,300, 930, 100, ["Someone Who Inspired Me Is My Dad", "My dad likes to code a lot", "He  taught me how to code"], {name:"shawn",x:1130, y:410});
        this.addstar(1650,275, 1550, 100, ["One New Term Is If Statements", "An If Statement is a condition that if", "is true will run the conditional code"], {name:"ifstatement",x:1480, y:275});
        this.addstar(2150,150, 2080, 25, ["What Research Is Being Done With Coding", "People are learning about coding and", "making it able to do things including", "• Making artificial intelligence", "• Making simulations", "• Analyzing data", "", "And my favorite", "Making video games"]);
        this.addstar(2800,250, 2730, 100, ["What Your Body Does When You Are Coding", "Your body uses:", "• Multiple demand system in the brain", "• The flexor digitorum superficialis and the", "flexor digitorum profundus muscles for moving fingers"]);
    }

    addstar(x,y,messageX, messageY, messages, image) {
        this.totalStars++;
        var star = this.physics.add.sprite(x, y, 'goal');
        star.body.setAllowGravity(false);
        this.physics.add.collider(star, this.worldLayer);
        this.physics.add.overlap(this.player, star, () => {this.starReached(this.player, star, messageX, messageY, messages, image)}, null, this);
    }  

    update() {
        super.update();
    }

    starReached (player, star, messageX, messageY, messages, image) {
        let extra = 0
        for (const m of messages) {
            this.add.text(messageX,messageY+extra, m, {fontSize: 20})
            extra += 22
        }
        
        if (image) {
            var placedImage = this.physics.add.sprite(image.x, image.y, image.name);
            placedImage.body.setAllowGravity(false);
        }

        star.destroy();
        this.totalStars--;
        // if (this.totalStars == 0){
        //     this.levelmusic.stop();
        //     this.scene.start("BossSceneIntro");
        // }
    }
}
export class StrengthMeter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        scene.add.existing(this);

        this.tweens = scene.tweens;

        this.winSong = this.scene.sound.add('winSound')

        this.indicatorImages = []
        this.emptyIndicatorImages = []
        this.scaleIndexHeight = [48, 48, 47, 45, 42, 39, 37, 37.5]
        this.delayBetweenBlocks = 200
        this.currentBlockIndex = 0

        this.star = scene.add.image(183, 135, 'star').setDepth(1).setVisible(false)

        this.ruby = scene.add.image(183, 135, 'ruby').setDepth(2);
    }

    initIndicatorImages() {
        for (let i = 1; i <= 8; i++) {
            const image = this.scene.add.image(182, 435 - i * this.scaleIndexHeight[i - 1], `${i}`).setVisible(false);
            this.indicatorImages.push(image);
        }
    }

    initEmptyIndicatorImages() {
        for (let i = 1; i <= 8; i++) {
            const image = this.scene.add.image(182, 435 - i * this.scaleIndexHeight[i - 1], `empty_${i}`).setVisible(true);
            this.emptyIndicatorImages.push(image);
        }
    }

    starRotate() {
        this.tweens.add({
            targets: this.star,
            angle: 360,
            duration: 3500,
            ease: 'Linear',
            repeat: -1,
        })
    }


    showNextBlock(punchForce) {
        const blocksToShow = Math.min(Math.ceil((punchForce - 10) / 10), this.indicatorImages.length);
    
        if (this.currentBlockIndex < blocksToShow) {
            this.indicatorImages[this.currentBlockIndex].setVisible(true);
            this.currentBlockIndex++;
            this.scene.time.delayedCall(this.delayBetweenBlocks, this.showNextBlock, [punchForce], this);
        } else {
            let message = "";
            let prize = "";
            if (punchForce >= 82) {
                this.star.setVisible(true);
                this.starRotate()

                this.scene.smileRobot.hide()

                this.scene.lovingRobot.show()

                this.winSong.play()
                this.winSong.setVolume(0.2);
                this.winSong.setLoop(true);

                message = "ВОТ ЭТО СИЛА!\nТы выиграл главный приз!";
                prize = "Рубин"
            } else if (punchForce >= 70) {
                message = "Ты почти выиграл приз!\nПопробуй ещё раз!";
            } else {
                message = "Неплохо!\nПопробуй ещё раз!";
            }
    
            this.scene.add.text(185, 535, message, {
                fontFamily: 'Roboto', fontSize: 14, color: '#FFFFFF',
                fontWeight: 700,
                align: 'center'
            }).setOrigin(0.5);

            prize && this.scene.add.text(185, 560, prize, {
                fontFamily: 'Roboto', fontSize: 14, color: '#FF4646',
                fontWeight: 700,
                align: 'center'
            }).setOrigin(0.5);
    
            this.scene.newGameBtn.setVisible(true);
        }
    }
}
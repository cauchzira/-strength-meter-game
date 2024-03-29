export class Hammer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        scene.add.existing(this);

        this.punchSound = this.scene.sound.add('punchSound')

        // Инициализируем свойство hammerSprite значением созданного спрайта
        this.hammerSprite = this;

        this.tweens = scene.tweens;
    }

    create() {
        this.rotateHammer()
    }

    punchAnimation(punchForce) {
        this.tweens.add({
            targets: this.hammerSprite,
            angle: -90,
            x: 210,
            y: 435,
            duration: 300,
            ease: 'Linear',
            onComplete: () => {
                this.tweens.add({
                    targets: this.scene.redBtn,
                    y: 455,
                    scaleY: 0.3,
                    duration: 1,
                    ease: 'Linear',
                })

                this.punchSound.play()

                this.scene.robot.hide()
                this.scene.smileRobot.show()
                this.scene.strengthMeter.showNextBlock(punchForce)
            }
        })
    }

    rotateHammer() {
        this.tweens.add({
            targets: this.hammerSprite,
            angle: 35,
            x: 290,
            y: 400,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => {
                this.scene.strengthScale.fillMeter()
                this.scene.punchBtn.setVisible(true)
            }
        });
    }
}
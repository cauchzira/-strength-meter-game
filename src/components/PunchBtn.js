export class PunchBtn extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        scene.add.existing(this);

        this.punchBtn = this;

        this.setInteractive();
        this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.tweens.killTweensOf([this.scene.strengthScale.rectangle, this.scene.strengthScale.currentMeter]);

            this.setVisible(false);
            this.scene.punchText.setVisible(false);

            this.scene.hammer.punchAnimation(Math.ceil(this.scene.strengthScale.punchForce));
        });
    }
}
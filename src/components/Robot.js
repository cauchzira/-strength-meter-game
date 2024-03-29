export class Robot extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }
}
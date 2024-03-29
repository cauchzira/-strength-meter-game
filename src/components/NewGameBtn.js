export class NewGameBtn extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        scene.add.existing(this);
        this.setInteractive();
        this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.setVisible(false)

            scene.sound.stopAll();

            scene.scene.start("Game");
        });
    }
}
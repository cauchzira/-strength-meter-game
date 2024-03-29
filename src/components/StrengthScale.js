export class StrengthScale extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        scene.add.existing(this);
        
        // Инициализация шкалы силы удара
        this.meterBg = scene.add.image(50, 545, 'meterBg');
        this.meter = scene.add.image(50, 540, 'meter');
        this.rectangle = scene.add.rectangle(51, 612, 36, 0, 0x00D355);
        this.rectangle.setAlpha(0.7);
        this.rectangle.setInteractive();

        this.gradient = scene.add.image(40, 540, 'gradient').setScale(1.05);
        this.currentMeter = scene.add.image(50, 612, 'currentMeter');

        // Параметров анимации
        this.animationDuration = 950; // Длительность анимации в миллисекундах
        this.startY = 612; // Начальная позиция currentMeter
        this.endY = 469; // Конечная позиция currentMeter

        this.punchForce = 0;
    }

    fillMeter() {
        this.scene.tweens.add({
            targets: this.currentMeter,
            y: this.endY,
            ease: 'Linear',
            duration: this.animationDuration,
            onUpdate: () => {
                this.punchForce += 1.425;
            },
            onComplete: () => {
                this.emptyMeter();
            }
        });

        this.scene.tweens.add({
            targets: this.rectangle,
            height: -145,
            ease: 'Linear',
            duration: this.animationDuration,
            onComplete: () => {
            }
        });
    }

    emptyMeter() {
        this.scene.tweens.add({
            targets: this.currentMeter,
            y: this.startY,
            ease: 'Linear',
            duration: this.animationDuration,
            onUpdate: () => {
                this.punchForce -= 1.425;
            },
            onComplete: () => {
                this.fillMeter();
            }
        });

        this.scene.tweens.add({
            targets: this.rectangle,
            height: 0,
            ease: 'Linear',
            duration: this.animationDuration,
        });
    }
}
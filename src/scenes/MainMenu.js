import { Scene } from 'phaser';
import { StrengthMeter } from '../components/StrengthMeter';
import { StrengthScale } from '../components/StrengthScale';
import { NewGameBtn } from '../components/NewGameBtn';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(180, 320, 'background');

        this.add.image(200, 320, 'union')

        this.add.image(25, 335, 'vector')

        this.add.image(180, 320, 'cloudOne')

        this.add.image(180, 230, 'cloudTwo').setScale(1.1)

        this.add.image(180, 520, 'secondBg')

        this.add.sprite(180, 480, 'floor');

        this.strengthMeter = new StrengthMeter(this, 183, 260, 'component');
        this.strengthMeter.initEmptyIndicatorImages()

        this.add.image(180, 490, 'buttonGlow')

        this.add.image(183, 460, 'button')

        const hammerSprite = this.add.sprite(255, 455, 'hammer')

        hammerSprite.rotation = Phaser.Math.DegToRad(-45);

        this.add.image(315, 575, 'robot');

        new NewGameBtn(this, 180, 600, 'newGameBtn');


        this.strengthScale = new StrengthScale(this)


        this.add.text(185, 545, "Привет!\nПроверим твою силу!", {
            fontFamily: 'Roboto', fontSize: 14, color: '#ffffff',
            fontWeight: 700,
            align: 'center'
        }).setOrigin(0.5);
    }
}
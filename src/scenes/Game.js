import { Scene } from 'phaser';
import { Hammer } from '../components/Hammer';
import { StrengthMeter } from '../components/StrengthMeter';
import { StrengthScale } from '../components/StrengthScale';
import { NewGameBtn } from '../components/NewGameBtn';
import { PunchBtn } from '../components/PunchBtn';
import { NormalRobot } from '../components/DefaultRobot';
import { SmilingRobot } from '../components/SmileRobot';
import { LovingRobot } from '../components/LovelyRobot';

export class Game extends Scene {
    constructor () {
        super('Game');
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
        this.strengthMeter.initIndicatorImages();


        this.add.image(180, 490, 'buttonGlow')

        this.add.image(183, 451, 'up')

        this.redBtn = this.add.image(183, 444, 'redBtn')

        this.add.image(183, 481, 'down')

        this.hammer = new Hammer(this, 255, 455, 'hammer')

        this.robot = new NormalRobot(this, 315, 575, 'robot')

        this.smileRobot = new SmilingRobot(this, 315, 575, 'smileRobot')

        this.lovingRobot = new LovingRobot(this, 315, 575, 'loveRobot')

        this.smileRobot.hide()

        this.lovingRobot.hide()

        this.strengthScale = new StrengthScale(this)

        this.hammer.rotateHammer()

        this.punchText = this.add.text(185, 545, "Ударь как можно сильнее!", {
            fontFamily: 'Roboto', fontSize: 14, color: '#ffffff',
            fontWeight: 700,
            align: 'center'
        }).setOrigin(0.5);

        this.newGameBtn = new NewGameBtn(this, 180, 600, 'newGameBtn').setVisible(false);

        this.punchBtn = new PunchBtn(this, 180, 600, 'punchBtn').setVisible(false);
    }
}

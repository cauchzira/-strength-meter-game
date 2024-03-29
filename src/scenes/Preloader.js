import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        this.add.image(180, 320, 'background');

        this.add.rectangle(183, 340, 300, 32).setStrokeStyle(1, 0xffffff);

        const bar = this.add.rectangle(40, 340, 4, 25, 0xffffff);

        this.load.on('progress', (progress) => {
            bar.width = 190 + (100 * progress);
        });
    }

    preload ()
    {
        this.load.setPath('assets');

        this.load.audio('punchSound', '/music/punch_sound.mp3');

        this.load.audio('winSound', '/music/winSong.mp3')

        this.load.image('secondBg', '/bg_second.png')

        this.load.image('newGameBtn', '/new_game.png');

        this.load.image('punchBtn', '/punch_btn.png');

        this.load.image('union', '/union.png')

        this.load.image('component', '/comp1.png')

        this.load.image('vector', '/vector.png')

        this.load.image('up', '/up.png')

        this.load.image('star', '/star.png')

        this.load.image('down', '/down.png')

        this.load.image('redBtn', '/red_btn.png')

        this.load.image('cloudOne', '/cloud_1.png')

        this.load.image('cloudTwo', '/cloud_2.png')

        this.load.image('robot', '/robot.png');

        this.load.image('smileRobot', '/smileRobot.png')

        this.load.image('loveRobot', '/loveRobot.png')

        this.load.image('hammer', '/hammer.png');

        this.load.image('floor', '/floor.png');

        this.load.image('buttonGlow', '/button_glow.png');

        this.load.image('strong', '/strong.png');

        this.load.image('button', '/button.png');

        this.load.image('ruby', '/ruby.png')
        this.load.image('meter', '/meter_1.png');
        this.load.image('meterBg', '/meter_bg.png');
        this.load.image('currentMeter', '/current_meter.png');
        this.load.image('gradient', '/meter.png')
        this.load.image('1', '/1.png')
        this.load.image('2', '/2.png')
        this.load.image('3', '/3.png')
        this.load.image('4', '/4.png')
        this.load.image('5', '/5.png')
        this.load.image('6', '/6.png')
        this.load.image('7', '/7.png')
        this.load.image('8', '/8.png')

        this.load.image('empty_1', '/empty_1.png')
        this.load.image('empty_2', '/empty_2.png')
        this.load.image('empty_3', '/empty_3.png')
        this.load.image('empty_4', '/empty_4.png')
        this.load.image('empty_5', '/empty_5.png')
        this.load.image('empty_6', '/empty_6.png')
        this.load.image('empty_7', '/empty_7.png')
        this.load.image('empty_8', '/empty_8.png')
    }

    create () {
        this.scene.start('MainMenu');
    }
}

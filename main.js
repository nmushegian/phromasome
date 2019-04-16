let app = new PIXI.Application({width: 800, height: 600, antialias: true});
let g = new PIXI.Graphics();
app.stage.addChild(g);
window.onload = function() {
    document.body.appendChild(app.view);
}

let intro = "\n\n the phromasome\n  or\n two octaves of the bichromic pitch perception double helix* \n  or\n the wizard's new lute\n\n  * a work in progress";
let style = new PIXI.TextStyle({
    fontSize: 16,
    fontFamily: ['Courier New', 'monospace'],
    fill: '0xffffff'
});
let msg = new PIXI.Text(intro, style);
app.stage.addChild(msg);

function draw(x, y, color) {
    g.beginFill(color, 1);
    g.drawCircle(x, y, 10);
    g.endFill();
}

var synth = new Tone.PolySynth(24, Tone.Synth).toMaster();

let down = {};
function assignKey(key, tone, color, x, y) {
    draw(x, y, color);
    window.addEventListener('keypress', function(event) {
        if (!down[event.key]) {
            if (event.key == key) {
                synth.triggerAttack(tone);
            }
            down[key] = true;
        }
    });
    window.addEventListener('keyup', function(event) {
        if(down[event.key]) {
            if (event.key == key) {
                synth.triggerRelease(tone);
            }
            down[key] = false;
        }
    });
}

// earthtones and pastels
let c = {
    'eRed': 0xff0000,
    'eOrange': 0xE96E1E,
    'eYellow': 0xE3DA09,
    'eGreen': 0x2FCB00,
    'eBlue': 0x5295FF,
    'ePurple': 0xAA00FF, 
    'pRed': 0xFF7F7B,
    'pOrange': 0xFFA82C,
    'pYellow': 0xF9FF00,
    'pGreen': 0x0BF288,
    'pBlue': 0x2FCBF6,
    'pPurple': 0xD560E0
}

assignKey('a', 'C4',  c.eRed, 25, 200);
assignKey('z', 'C#4', c.pOrange, 50, 230);
assignKey('s', 'D4',  c.eYellow, 75, 200);
assignKey('x', 'D#4', c.pGreen,100, 230);
assignKey('d', 'E4',  c.eBlue,125, 200);
assignKey('c', 'F4',  c.pPurple,150, 230);
assignKey('f', 'F#4', c.pRed,175, 200);
assignKey('v', 'G4',  c.eOrange,200, 230);
assignKey('g', 'G#4', c.pYellow,225, 200);
assignKey('b', 'A4',  c.eGreen,250, 230);
assignKey('h', 'A#4', c.pBlue,275, 200);
assignKey('n', 'B4',  c.ePurple,300, 230);

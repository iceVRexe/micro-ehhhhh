input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    speed_blocks = 1000
    Speed_tempo = 120
    music.play(music.stringPlayable("C D F E C D F E ", Speed_tempo), music.PlaybackMode.LoopingInBackground)
    Big_Bad_Block.delete()
    Playing = 1
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let SCore = 0
let Dead = 0
let Playing = 0
let Speed_tempo = 0
let speed_blocks = 0
let Big_Bad_Block: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
Big_Bad_Block = game.createSprite(randint(0, 4), 4)
loops.everyInterval(1000, function () {
    speed_blocks += -50
    Speed_tempo += 50
})
loops.everyInterval(10, function () {
    if (Player.isTouching(Big_Bad_Block)) {
        Dead = 1
        music.stopAllSounds()
        basic.showNumber(SCore)
        control.reset()
    }
})
basic.forever(function () {
    if (Playing == 1) {
        if (Dead == 1) {
        	
        } else {
            Big_Bad_Block = game.createSprite(randint(0, 4), 4)
            basic.pause(speed_blocks)
            Big_Bad_Block.change(LedSpriteProperty.Y, -1)
            basic.pause(speed_blocks)
            Big_Bad_Block.change(LedSpriteProperty.Y, -1)
            basic.pause(speed_blocks)
            Big_Bad_Block.change(LedSpriteProperty.Y, -1)
            basic.pause(speed_blocks)
            Big_Bad_Block.change(LedSpriteProperty.Y, -1)
            basic.pause(speed_blocks)
            Big_Bad_Block.delete()
            SCore += 1
        }
    }
})

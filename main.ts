radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.playMelody("B D B D B F E A ", 344)
        LED.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        music.playMelody("B D B D B F E A ", 344)
        LED.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
})
input.onButtonPressed(Button.A, function () {
    LED.showColor(neopixel.colors(NeoPixelColors.Red))
    radio.sendNumber(1)
    images.createImage(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        # # # # #
        `).showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    LED.showColor(neopixel.colors(NeoPixelColors.Black))
    radio.sendNumber(3)
    images.createImage(`
        # # # # #
        . . . . #
        # # # # #
        . . . . #
        # # # # #
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    LED.showColor(neopixel.colors(NeoPixelColors.Green))
    radio.sendNumber(2)
    images.createImage(`
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        `).showImage(0)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    count = 10
    images.createImage(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `).showImage(0)
})
let count = 0
let LED: neopixel.Strip = null
LED = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
LED.showColor(neopixel.colors(NeoPixelColors.Black))

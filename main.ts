radio.onReceivedNumber(function (receivedNumber) {
    count = 0
    if (receivedNumber == 1) {
        while (count < 10) {
            music.playMelody("B D B D B F E A ", 344)
            images.iconImage(IconNames.Heart).showImage(0)
            count += 1
        }
    }
    images.iconImage(IconNames.Yes).showImage(0)
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
    count = 0
    while (count < 10) {
        music.playMelody("B D B D B F E A ", 344)
        images.iconImage(IconNames.Heart).showImage(0)
        count += 1
    }
    images.iconImage(IconNames.Yes).showImage(0)
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

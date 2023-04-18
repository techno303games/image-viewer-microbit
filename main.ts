basic.showString("smile")
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    # # # # #
    `)
basic.pause(100)
basic.clearScreen()
basic.showString("happy")
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
basic.showString("sad")
basic.showIcon(IconNames.Sad)
basic.pause(100)
basic.clearScreen()
basic.showString("ghost")
basic.showIcon(IconNames.Ghost)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
	
})

let velocidad = 0
basic.forever(function () {
    velocidad = 200
    for (let index = 0; index < 3; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(velocidad)
                led.unplot(x, y)
                basic.pause(velocidad)
            }
        }
        basic.showIcon(IconNames.Silly)
        basic.clearScreen()
        velocidad += -80
    }
})

basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) >= 600) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(4500)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(4000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) >= 600) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(4500)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(4000)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
})

grove.onJoystick(GroveJoystickKey.Left, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.West)
})
grove.onJoystick(GroveJoystickKey.Up, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.North)
})
grove.onJoystick(GroveJoystickKey.Press, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showIcon(IconNames.Heart)
})
grove.onJoystick(GroveJoystickKey.Right, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.East)
})
grove.onJoystick(GroveJoystickKey.LR, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.SouthEast)
})
grove.onJoystick(GroveJoystickKey.UL, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.NorthWest)
})
grove.onJoystick(GroveJoystickKey.LL, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.SouthWest)
})
grove.onJoystick(GroveJoystickKey.Down, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.South)
})
grove.onJoystick(GroveJoystickKey.UR, AnalogPin.P0, AnalogPin.P1, function () {
    basic.showArrow(ArrowNames.NorthEast)
})
basic.forever(function () {
	
})

function girar () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.North)
    }
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        girar()
    }
    if (input.isGesture(Gesture.TiltRight)) {
        girar()
    }
    if (input.isGesture(Gesture.LogoUp)) {
        girar()
    }
    if (input.isGesture(Gesture.LogoDown)) {
        girar()
    }
})

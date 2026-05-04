input.onButtonPressed(Button.A, function () {
    object += 1
    if (object > 5) {
        object = 1
    }
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(object)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    music.play(music.tonePlayable(165, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    PlanetX_AILens.ClearlearnObject()
})
input.onButtonPressed(Button.B, function () {
    if (object == 1) {
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID1)
    }
    if (object == 2) {
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID2)
    }
    if (object == 3) {
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID3)
    }
    if (object == 4) {
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID4)
    }
    if (object == 5) {
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID5)
    }
})
let object = 0
PlanetX_AILens.initModule()
object = 1
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
PlanetX_AILens.ClearlearnObject()
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1)) {
        basic.showNumber(1)
        basic.pause(1000)
        basic.showNumber(PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID1))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID2)) {
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID2))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID3)) {
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID3))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID4)) {
        basic.showNumber(4)
        basic.pause(1000)
        basic.showNumber(PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID4))
    }
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID5)) {
        basic.showNumber(5)
        basic.pause(1000)
        basic.showNumber(PlanetX_AILens.objectConfidence(PlanetX_AILens.learnID.ID5))
    }
})

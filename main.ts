input.onButtonPressed(Button.A, function () {
    radio.sendString("HELLO HAW ARE YOU")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(123)

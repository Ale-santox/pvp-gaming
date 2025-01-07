controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function on_player2_button_b_pressed() {
    animation.runImageAnimation(mySprite2, [img`
                ..............ffffff....
                        .............f8f6666ff..
                        ............f888f6666ff.
                        .......88...f6666ff666f.
                        .......8d8.f6888866ffff.
                        .......8dd8f86ffff8886f.
                        ........8dd8ff666fffffff
                        .........8dd8644fb6446ff
                        ..........8d86ddf14d466f
                        ..........888d6ddd4666f.
                        ...........6dd464466ff..
                        ............66448888f...
                        .............f868888f...
                        .............f554444f...
                        ..............ffffff....
                        ................fff.....
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `, img`
                ........................
                        ..............fff.......
                        .............f8fffff....
                        ...........ff8866666ff..
                        ..........ff888666666ff.
                        ..........f6666fff6666f.
                        .........f68888666fffff.
                        .........f86fffff8886fff
                        ..88.....fff666fffffffff
                        ..8d88...f6644fbb6446f6f
                        ..88dd88..f6ddfbb4d466f.
                        ....8ddd866fddddd4666f..
                        .....88d8dd668888888f...
                        ......888dd446544444f...
                        .........6666ffffffff...
                        .............ff...fff...
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `, img`
                ...............ff.......
                        .............ff8ffff....
                        ............ff8f6666ff..
                        ...........ff88f66666ff.
                        ...........f6666ff6666f.
                        ..........f6888866fffff.
                        ..........f86ffff8886fff
                        ..........fff666ffffffff
                        ..........f6644fb6446f6f
                        ...........f6ddfb4d466f.
                        ..........8.66ddd4666f..
                        ....88888886dd668888f...
                        .....ddddd86dd446444f...
                        ......88888.6666fffff...
                        ..........8...ffffffff..
                        ...............ff..fff..
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `, img`
                ..............ffffff....
                        .............f8f6666ff..
                        ............f888f6666ff.
                        ............f6666ff666f.
                        ...........f6888866ffff.
                        ...........f86ffff8886f.
                        ...........fff666fffffff
                        ...........f6644fb6446ff
                        ............f6ddf14d466f
                        .............fdddd4666f.
                        .............f64446ddf..
                        .............888886ddf..
                        .............8d888f66...
                        ............8dd84444f...
                        ...........8dd8fffff....
                        ..........8dd8..fff.....
                        ..........8d8...........
                        ..........88............
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `], 100, false)
    mySprite2.startEffect(effects.blizzard, 500)
    if (mySprite2.overlapsWith(mySprite) && !controller.player1.isPressed(ControllerButton.A)) {
        info.player1.setLife(info.player1.life() - 10)
    }
    
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player2_button_a_pressed() {
    animation.runImageAnimation(mySprite2, [img`
                . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . f 8 f 6 6 6 6 f f . . . 
                        . . . f 8 8 8 f 6 6 6 6 f f . . 
                        . . . f 6 6 6 6 f f 6 6 6 f . . 
                        . . f 6 8 8 8 8 6 6 f f f f . . 
                        . . f 8 6 f f f f 8 8 8 6 f . . 
                        . . f f f 6 6 6 f f f f f f f . 
                        . . f 6 6 4 4 f b 6 4 4 6 f f . 
                        . . 8 8 6 d d f 1 4 d 4 6 6 f . 
                        . 8 d d 8 d d d d 4 6 6 6 f . . 
                        . 8 b b 8 6 6 6 4 6 6 f . . . . 
                        . 8 b b 6 d d 4 8 8 8 f . . . . 
                        . . 8 b 6 d d 6 4 4 4 f f . . . 
                        . . . 8 8 6 6 f f f f f f . . . 
                        . . . . f f f . . . f f . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . f 8 f 6 6 6 6 f f . . . 
                        . . . f 8 8 8 f 6 6 6 6 f f . . 
                        . . . f 6 6 6 6 f f 6 6 6 f . . 
                        . . f 6 8 8 8 8 6 6 f f f f . . 
                        . . f 8 6 f f f f 8 8 8 6 f . . 
                        . . f f f 6 6 6 f f f f f f f . 
                        . . f 6 6 4 4 f b 6 4 4 6 f f . 
                        . . . f 6 d d f 1 4 d 4 6 6 f . 
                        . . . . f d d d 6 6 6 6 6 f . . 
                        . . . . f 6 4 6 d d 4 f . . . . 
                        . . . . f 8 8 6 d d 6 f . . . . 
                        . . . f f 5 5 f 6 6 f f f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . f f f . . . f f . . . .
            `, img`
                . . . . . f f f f f f . . . . . 
                        . . . . f 8 f 6 6 6 6 f f . . . 
                        . . . f 8 8 8 f 6 6 6 6 f f . . 
                        . . . f 6 6 6 6 f f 6 6 6 f . . 
                        . . f 6 8 8 8 8 6 6 f f f f . . 
                        . . f 8 6 f f f f 8 8 8 6 f . . 
                        . . f f f 6 6 6 f f f f f f f . 
                        . . f 6 6 4 4 f b 6 4 4 6 f f . 
                        . . f f 6 d d f 1 4 d 4 6 6 f . 
                        . f d d f d d d d 4 6 6 6 f . . 
                        . f b b f 6 6 6 4 6 6 f f . . . 
                        . f b b 6 d d 4 8 8 8 f . . . . 
                        . . f b 6 d d 6 8 8 8 6 . . . . 
                        . . . f f 6 6 f 4 4 4 f . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . f 8 f 6 6 6 6 f f . . . . 
                        . . f 8 8 8 f 6 6 6 6 f f . . . 
                        . . f 6 6 6 6 f f 6 6 6 f . . . 
                        . f 6 8 8 8 8 6 6 f f f f . . . 
                        . f 8 6 f f f f 8 8 8 6 f . . . 
                        . f f f 6 6 6 f f f f f f f . . 
                        . f 6 6 4 4 f b 6 4 4 6 f f . . 
                        . . f 6 d d f 1 4 d 4 6 6 f . . 
                        . . . f d d d 6 6 6 6 6 f . . . 
                        . . . f 6 4 6 d d 4 f . . . . . 
                        . . . f 8 8 6 d d 6 f . . . . . 
                        . . f f 5 5 f 6 6 f f f . . . . 
                        . . f f f f f f f f f f . . . . 
                        . . . f f f . . . f f . . . . .
            `], 100, false)
    mySprite2.startEffect(effects.coolRadial, 500)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function on_player2_button_right_pressed() {
    animation.runImageAnimation(mySprite2, [img`
                . . . . . . f f f f f f . . . . 
                        . . . . f f 6 6 6 6 f 8 f . . . 
                        . . . f f 6 6 6 6 f 8 8 8 f . . 
                        . . . f 6 6 6 f f 6 6 6 6 f . . 
                        . . . f f f f 6 6 8 8 8 8 6 f . 
                        . . . f 6 8 8 8 f f f f 6 8 f . 
                        . . f f f f f f f 6 6 6 f f f . 
                        . . f f 6 4 4 6 b f 4 4 6 6 f . 
                        . . f 6 6 4 d 4 1 f d d 6 f . . 
                        . . . f 6 6 6 4 d d d d f . . . 
                        . . . . f f 6 6 4 4 4 6 f . . . 
                        . . . . . 4 d d 6 8 8 8 f . . . 
                        . . . . . 6 d d 6 8 8 8 f . . . 
                        . . . . . f 6 6 f 4 5 5 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f 6 6 6 6 f 8 f . . . 
                        . . . f f 6 6 6 6 f 8 8 8 f . . 
                        . . . f 6 6 6 f f 6 6 6 6 f . . 
                        . . . f f f f 6 6 8 8 8 8 6 f . 
                        . . . f 6 8 8 8 f f f f 6 8 f . 
                        . . f f f f f f f 6 6 6 f f f . 
                        . . f f 6 4 4 6 b f 4 4 6 6 f . 
                        . . f 6 6 4 d 4 1 f d d 6 f . . 
                        . . . f 6 6 6 6 6 d d d f . . . 
                        . . . . . f 4 d d 6 4 6 f . . . 
                        . . . . . f 6 d d 6 8 8 f . . . 
                        . . . . f f f 6 6 f 5 5 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            `, img`
                . . . . . . f f f f f f . . . . 
                        . . . . f f 6 6 6 6 f 8 f . . . 
                        . . . f f 6 6 6 6 f 8 8 8 f . . 
                        . . . f 6 6 6 f f 6 6 6 6 f . . 
                        . . . f f f f 6 6 8 8 8 8 6 f . 
                        . . . f 6 8 8 8 f f f f 6 8 f . 
                        . . f f f f f f f 6 6 6 f f f . 
                        . . f f 6 4 4 6 b f 4 4 6 6 f . 
                        . . f 6 6 4 d 4 1 f d d 6 f . . 
                        . . . f 6 6 6 4 d d d d f . . . 
                        . . . . f f 6 6 4 4 4 6 f . . . 
                        . . . . . 4 d d 6 8 8 8 f . . . 
                        . . . . . 6 d d 6 8 8 8 f . . . 
                        . . . . . f 6 6 f 4 5 5 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f 6 6 6 6 f 8 f . . . 
                        . . . f f 6 6 6 6 f 8 8 8 f . . 
                        . . . f 6 6 6 f f 6 6 6 6 f . . 
                        . . . f f f f 6 6 8 8 8 8 6 f . 
                        . . . f 6 8 8 8 f f f f 6 8 f . 
                        . . f f f f f f f 6 6 6 f f f . 
                        . . f f 6 4 4 6 b f 4 4 6 6 f . 
                        . . f 6 6 4 d 4 1 f d d 6 f . . 
                        . . . f 6 6 6 4 d d d d f . . . 
                        . . . . 4 d d 6 4 4 4 6 f . . . 
                        . . . . 6 d d 6 8 8 8 8 f . . . 
                        . . . . f 6 6 f 4 4 5 5 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            `], 100, false)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function on_player2_button_left_pressed() {
    animation.runImageAnimation(mySprite2, [img`
                . . . . f f f f f f . . . . . . 
                        . . . f 8 f 6 6 6 6 f f . . . . 
                        . . f 8 8 8 f 6 6 6 6 f f . . . 
                        . . f 6 6 6 6 f f 6 6 6 f . . . 
                        . f 6 8 8 8 8 6 6 f f f f . . . 
                        . f 8 6 f f f f 8 8 8 6 f . . . 
                        . f f f 6 6 6 f f f f f f f . . 
                        . f 6 6 4 4 f b 6 4 4 6 f f . . 
                        . . f 6 d d f 1 4 d 4 6 6 f . . 
                        . . . f d d d d 4 6 6 6 f . . . 
                        . . . f 6 4 4 4 6 6 f f . . . . 
                        . . . f 8 8 8 6 d d 4 . . . . . 
                        . . . f 8 8 8 6 d d 6 . . . . . 
                        . . . f 5 5 4 f 6 6 f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . f 8 f 6 6 6 6 f f . . . . 
                        . . f 8 8 8 f 6 6 6 6 f f . . . 
                        . . f 6 6 6 6 f f 6 6 6 f . . . 
                        . f 6 8 8 8 8 6 6 f f f f . . . 
                        . f 8 6 f f f f 8 8 8 6 f . . . 
                        . f f f 6 6 6 f f f f f f f . . 
                        . f 6 6 4 4 f b 6 4 4 6 f f . . 
                        . . f 6 d d f 1 4 d 4 6 6 f . . 
                        . . . f d d d 6 6 6 6 6 f . . . 
                        . . . f 6 4 6 d d 4 f . . . . . 
                        . . . f 8 8 6 d d 6 f . . . . . 
                        . . f f 5 5 f 6 6 f f f . . . . 
                        . . f f f f f f f f f f . . . . 
                        . . . f f f . . . f f . . . . .
            `, img`
                . . . . f f f f f f . . . . . . 
                        . . . f 8 f 6 6 6 6 f f . . . . 
                        . . f 8 8 8 f 6 6 6 6 f f . . . 
                        . . f 6 6 6 6 f f 6 6 6 f . . . 
                        . f 6 8 8 8 8 6 6 f f f f . . . 
                        . f 8 6 f f f f 8 8 8 6 f . . . 
                        . f f f 6 6 6 f f f f f f f . . 
                        . f 6 6 4 4 f b 6 4 4 6 f f . . 
                        . . f 6 d d f 1 4 d 4 6 6 f . . 
                        . . . f d d d d 4 6 6 6 f . . . 
                        . . . f 6 4 4 4 6 6 f f . . . . 
                        . . . f 8 8 8 6 d d 4 . . . . . 
                        . . . f 8 8 8 6 d d 6 . . . . . 
                        . . . f 5 5 4 f 6 6 f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . f 8 f 6 6 6 6 f f . . . . 
                        . . f 8 8 8 f 6 6 6 6 f f . . . 
                        . . f 6 6 6 6 f f 6 6 6 f . . . 
                        . f 6 8 8 8 8 6 6 f f f f . . . 
                        . f 8 6 f f f f 8 8 8 6 f . . . 
                        . f f f 6 6 6 f f f f f f f . . 
                        . f 6 6 4 4 f b 6 4 4 6 f f . . 
                        . . f 6 d d f 1 4 d 4 6 6 f . . 
                        . . . f d d d d 4 6 6 6 f . . . 
                        . . . f 6 4 4 4 6 d d 4 . . . . 
                        . . . f 8 8 8 8 6 d d 6 . . . . 
                        . . f f 5 5 4 4 f 6 6 f . . . . 
                        . . f f f f f f f f f f . . . . 
                        . . . f f f . . . f f . . . . .
            `], 100, false)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function on_player1_button_right_pressed() {
    animation.runImageAnimation(mySprite, [img`
                . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . f f e e 4 4 4 e f . . . 
                        . . . . . 4 d d e 2 2 2 f . . . 
                        . . . . . e d d e 2 2 2 f . . . 
                        . . . . . f e e f 4 5 5 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e e e d d d f . . . 
                        . . . . . f 4 d d e 4 e f . . . 
                        . . . . . f e d d e 2 2 f . . . 
                        . . . . f f f e e f 5 5 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            `, img`
                . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . f f e e 4 4 4 e f . . . 
                        . . . . . 4 d d e 2 2 2 f . . . 
                        . . . . . e d d e 2 2 2 f . . . 
                        . . . . . f e e f 4 5 5 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . 4 d d e 4 4 4 e f . . . 
                        . . . . e d d e 2 2 2 2 f . . . 
                        . . . . f e e f 4 4 5 5 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            `], 100, false)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
    animation.runImageAnimation(mySprite, [img`
                . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . f f e e e e f 2 f . . . . 
                        . . f f e e e e f 2 2 2 f . . . 
                        . . f e e e f f e e e e f . . . 
                        . . f f f f e e 2 2 2 2 e f . . 
                        . . f e 2 2 2 f f f f e 2 f . . 
                        . f f f f f f f e e e f f f . . 
                        . f f e 4 4 e b f 4 4 e e f . . 
                        . f e e 4 d 4 1 f d d e f . . . 
                        . . f e e e e e d d d f . . . . 
                        . . . . f 4 d d e 4 e f . . . . 
                        . . . . f e d d e 2 2 f . . . . 
                        . . . f f f e e f 5 5 f f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . f f . . . f f f . . . .
            `, img`
                . . . . . f f f f f f . . . . . 
                        . . . f f e e e e f 2 f . . . . 
                        . . f f e e e e f 2 2 2 f . . . 
                        . . f e e e f f e e e e f . . . 
                        . . f f f f e e 2 2 2 2 e f . . 
                        . . f e 2 2 2 f f f f e 2 f . . 
                        . f f f f f f f e e e f f f . . 
                        . f f e 4 4 e b f 4 4 e e f . . 
                        . f e e 4 d 4 1 f d d e 2 2 . . 
                        . . f e e e 4 d d d d 2 d d 2 . 
                        . . . f f e e 4 e e e 2 b b 2 . 
                        . . . . f 2 2 2 4 d d e b b 2 . 
                        . . . . e 2 2 2 e d d e b 2 . . 
                        . . . . f 4 4 4 f e e 2 2 . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . f f e e e e f 2 f . . . . 
                        . . f f e e e e f 2 2 2 f . . . 
                        . . f e e e f f e e e e f . . . 
                        . . f f f f e e 2 2 2 2 e f . . 
                        . . f e 2 2 2 f f f f e 2 f . . 
                        . f f f f f f f e e e f f f . . 
                        . f f e 4 4 e b f 4 4 e e f . . 
                        . f e e 4 d 4 1 f d d e f . . . 
                        . . f e e e e e d d d f . . . . 
                        . . . . f 4 d d e 4 e f . . . . 
                        . . . . f e d d e 2 2 f . . . . 
                        . . . f f f e e f 5 5 f f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . f f . . . f f f . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . f f e e e e f 2 f . . . . 
                        . . f f e e e e f 2 2 2 f . . . 
                        . . f e e e f f e e e e f . . . 
                        . . f f f f e e 2 2 2 2 e f . . 
                        . . f e 2 2 2 f f f f e 2 f . . 
                        . f f f f f f f e e e f f f . . 
                        . f f e 4 4 e b f 4 4 e e f . . 
                        . f e e 4 d 4 1 f d d e 2 2 . . 
                        . . f e e e 4 d d d d 2 d d 2 . 
                        . . . . f e e 4 e e e 2 b b 2 . 
                        . . . . f 2 2 2 4 d d e b b 2 . 
                        . . . f f 4 4 4 e d d e b 2 . . 
                        . . . f f f f f f e e 2 2 . . . 
                        . . . . f f . . . f f f . . . .
            `], 100, false)
    mySprite.startEffect(effects.warmRadial, 500)
})
info.player1.onLifeZero(function on_player1_life_zero() {
    game.splash("PLayer 2 WINS")
    game.reset()
})
info.player2.onLifeZero(function on_player2_life_zero() {
    game.splash("PLayer 1 WINS")
    game.reset()
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function on_player1_button_b_pressed() {
    animation.runImageAnimation(mySprite, [img`
                ........................
                        ....ffffff..............
                        ..ffeeeef2f.............
                        .ffeeeef222f............
                        .feeeffeeeef...22.......
                        .ffffee2222ef.2d2.......
                        .fe222ffffe2f2dd2.......
                        fffffffeeeff2dd2........
                        ffe44ebf44e2dd2.........
                        fee4d41fdde2d2..........
                        .feee4ddded222..........
                        ..ffee44e4dde...........
                        ...f222244ee............
                        ...f2222e2f.............
                        ...f444455f.............
                        ....ffffff..............
                        .....fff................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `, img`
                ........................
                        .......fff..............
                        ....fffff2f.............
                        ..ffeeeee22ff...........
                        .ffeeeeee222ff..........
                        .feeeefffeeeef..........
                        .fffffeee2222ef.........
                        fffe222fffffe2f.........
                        fffffffffeeefff.....22..
                        fefe44ebbf44eef...22d2..
                        .fee4d4bbfddef..22dd22..
                        ..feee4dddddfee2ddd2....
                        ...f2222222eedd2d22.....
                        ...f444445e44dd222......
                        ...ffffffffeeee.........
                        ...fff...ff.............
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `, img`
                .......ff...............
                        ....ffff2ff.............
                        ..ffeeeef2ff............
                        .ffeeeeef22ff...........
                        .feeeeffeeeef...........
                        .fffffee2222ef..........
                        fffe222ffffe2f..........
                        ffffffffeeefff..........
                        fefe44ebf44eef..........
                        .fee4d4bfddef...........
                        ..feee4dddee.2..........
                        ...f2222eedde2222222....
                        ...f444e44dde2ddddd.....
                        ...fffffeeee.22222......
                        ..ffffffff...2..........
                        ..fff..ff...............
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `, img`
                ....ffffff..............
                        ..ffeeeef2f.............
                        .ffeeeef222f............
                        .feeeffeeeef............
                        .ffffee2222ef...........
                        .fe222ffffe2f...........
                        fffffffeeefff...........
                        ffe44ebf44eef...........
                        fee4d41fddef............
                        .feee4ddddf.............
                        ..fdde444ef.............
                        ..fdde22222.............
                        ...eef222d2.............
                        ...f44442dd2............
                        ....fffff2dd2...........
                        .....fff..2dd2..........
                        ...........2d2..........
                        ............22..........
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
            `], 100, false)
    mySprite.startEffect(effects.fire, 500)
    if (mySprite.overlapsWith(mySprite2) && !controller.player2.isPressed(ControllerButton.A)) {
        info.player2.setLife(info.player2.life() - 10)
    }
    
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function on_player1_button_left_pressed() {
    animation.runImageAnimation(mySprite, [img`
                . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e e f f . . . . 
                        . . . f 2 2 2 e d d 4 . . . . . 
                        . . . f 2 2 2 e d d e . . . . . 
                        . . . f 5 5 4 f e e f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d e e e e e f . . . 
                        . . . f e 4 e d d 4 f . . . . . 
                        . . . f 2 2 e d d e f . . . . . 
                        . . f f 5 5 f e e f f f . . . . 
                        . . f f f f f f f f f f . . . . 
                        . . . f f f . . . f f . . . . .
            `, img`
                . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e e f f . . . . 
                        . . . f 2 2 2 e d d 4 . . . . . 
                        . . . f 2 2 2 e d d e . . . . . 
                        . . . f 5 5 4 f e e f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e d d 4 . . . . 
                        . . . f 2 2 2 2 e d d e . . . . 
                        . . f f 5 5 4 4 f e e f . . . . 
                        . . f f f f f f f f f f . . . . 
                        . . . f f f . . . f f . . . . .
            `], 100, false)
})
let mySprite2 : Sprite = null
let mySprite : Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddfffffffffffffdddddddddddddddddddddddddddfffffffffffffdddddddddddddddddddddddddddfffffffffffffdddddddddddddddddddddddddddfffffffffffffddddddddddddddddd
        ddddddfffffffffffffffffffffdddddddddddddddddddfffffffffffffffffffffdddddddddddddddddddfffffffffffffffffffffdddddddddddddddddddfffffffffffffffffffffddddddddddddd
        ddddffffffffffffffffdddfffffffddddddddddddddffffffffffffffffdddfffffffddddddddddddddffffffffffffffffdddfffffffddddddddddddddffffffffffffffffdddfffffffdddddddddd
        ddfffffffffffffffffffddddddffffffdddddddddfffffffffffffffffffddddddffffffdddddddddfffffffffffffffffffddddddffffffdddddddddfffffffffffffffffffddddddffffffddddddd
        ffffffffffffffffffffffdddddddddddddddfffffffffffffffffffffffffdddddddddddddddfffffffffffffffffffffffffdddddddddddddddfffffffffffffffffffffffffdddddddddddddddfff
        ffffffffffffffffffffffffffddddddddffffffffffffffffffffffffffffffffddddddddffffffffffffffffffffffffffffffffddddddddffffffffffffffffffffffffffffffffddddddddffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`)
mySprite = sprites.create(img`
        ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            2d2eeddddd4eff..........
            2b2fee444edd4e..........
            2b24f2222edde...........
            2c2.f22222ee............
            .22.f442d24f............
            ....ff2dd2ff............
            .....2dd2ff.............
            ....2dd2................
            ....2d2.................
            ....22..................
            ........................
            ........................
            ........................
            ........................
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
        ........................
            ......ffff..............
            ....fff88fff............
            ...fff8888fff...........
            ..fff666666fff..........
            ..ff688888866f..........
            ..f68ffffff86f..........
            ..ffff6666ffff..........
            .ff6fbf44fbf6ff.........
            .f6641fddf1466f.........
            8d866ddddd46ff..........
            8b8f664446dd46..........
            8b84f88886dd6...........
            8c8.f8888866............
            .88.f448d84f............
            ....ff8dd8ff............
            .....8dd8ff.............
            ....8dd8................
            ....8d8.................
            ....88..................
            ........................
            ........................
            ........................
            ........................
    `, SpriteKind.Player)
mySprite.setPosition(40, 75)
mySprite2.setPosition(130, 75)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
info.player2.setLife(100)
info.player1.setLife(100)
controller.player1.moveSprite(mySprite, 50, 0)
controller.player2.moveSprite(mySprite2, 50, 0)

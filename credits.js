var credit_count = 6*60;
var gameover_count = 3*60;

function gameover() {
    if (gameover_count > 0) {
        gameover_count -= 1;
        background(0);
        image(game_over, windowWidth/2, windowHeight/2);
    } else {
        gameover_count = 3*60;
        scene = 9;
    }
}

function credits() {
    background(255);
    image(ending, windowWidth/2, windowHeight/2-350);
    image(credit, windowWidth/2, windowHeight/2);
    image(ggj, windowWidth/2, windowHeight/2+350);
    if (credit_count > 0) {
        credit_count -= 1;
    } else {
        credit_count = 6*60;
        reset();
        scene = 0;
    }
}
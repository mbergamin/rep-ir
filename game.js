//game global variables
var title, howtoplay, go, done, plastic, toothbrush1, toothbrush2, toothbrush3, toothbrush_status, finger1, finger2, finger3, f1v, f2v, f1h, f2h, finger_increment, bandaid, chop, trunk, tree_posx, tree_posy, icecream, cherry, cherry_posx, cherry_posy, nose, smile, frown, bleed, bleed_posx, bleed_posy, hand, pipe, cad1, cad2, del_posx, del_posy, credit, ending, ggj, click1, game_over;
var scene = 0;
var repair = false;
var scene_array = [2,3,4,5,6,7];
var feedback_count = 30;

// Preloading assets
function preload(){
    title = loadImage('assets/title.png');
    howtoplay = loadImage('assets/howtoplay.png');
    go = loadImage('assets/go.png');
    done = loadImage('assets/done.png');
    toothbrush1 = loadImage('assets/toothbrush1.png');
    toothbrush2 = loadImage('assets/toothbrush2.png');
    toothbrush3 = loadImage('assets/toothbrush3.png');
    bandaid = loadImage('assets/bandaid.png');
    chop = loadImage('assets/tree.png');
    trunk = loadImage('assets/trunk.png');
    icecream = loadImage('assets/icecream.png');
    cherry = loadImage('assets/cherry.png');
    nose = loadImage('assets/nose.png');
    smile = loadImage('assets/smile.png');
    frown = loadImage('assets/frown.png');
    bleed = loadImage('assets/bleed.png');
    hand = loadImage('assets/hand1.png');
    pipe = loadImage('assets/pipe.png');
    cad1 = loadImage('assets/cad.png');
    cad2 = loadImage('assets/cad_pressed.png');
    ending = loadImage('assets/ending.png');
    credit = loadImage('assets/credit.png');
    ggj = loadImage('assets/ggj.png');
    finger1 = loadImage('assets/finger1.png');
    finger2 = loadImage('assets/finger2.png');
    finger3 = loadImage('assets/finger3.png');
    click1 = loadImage('assets/click_start.png');
    game_over = loadImage('assets/game_over.png');
}

//Setting up the game
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);
    noCursor();
    count = 60*3;
    finger_increment = 150;
    toothbrush_status = toothbrush1;
    mx = windowWidth/2;
    my = windowHeight/2-200;
    hx = windowWidth/2+70;
    hy = windowHeight/2-120;
    
}

//scenes go here, each scene is coded in its own file.
function draw() {
    if (scene === 0) intro();
    else if (scene === 1) instructions();
    else if (scene === 2) toothbrush();
    else if (scene === 3) tree();
    else if (scene === 4) gelato();
    else if (scene === 5) noseBleed();
    else if (scene === 6) plumber();
    else if (scene === 7) controlAltDel();
    else if (scene === 8) gameover();
    else if (scene === 9) credits();
    else if (scene === 99) complete();
//    fill(150);
//    text(mouseX, 20, 20);
//    text(mouseY, 50, 20);
}

//keyborad shortcuts, mostly for debbuging and resetting the game
function keyPressed() {
    //ESC to exit and reset the game at any time (back to main screen)
    if (keyCode === ESCAPE) reset();
    if (key === "1") scene = 1;
    if (key === "2") {scene = 2; count = 60*20;}
    if (key === "3") {scene = 3; count = 60*20;}
    if (key === "4") {scene = 4; count = 60*20;}
    if (key === "5") {scene = 5; count = 60*20;}
    if (key === "6") {scene = 6; count = 60*20;}
    if (key === "7") {scene = 7; count = 60*20;}
    if (key === "9") scene = 9;
}

//mouse clicks and interactions and solutions for each scene
function mouseClicked() {
    if (scene === 0) scene = 1;
    if (scene === 2) {
        if (mouseX > 580 && mouseX < 690 && mouseY > 640 && mouseY < 750) repair = true;
    }
    if (scene === 3) {
        if (mouseX > 940 && mouseX < 980 && mouseY > 520 && mouseY < 550) {
            repair = true;
            tree_posx = mouseX;
            tree_posy = mouseY - windowHeight/2;
        }
    }
    if (scene === 4) {
        if (mouseX > 800 && mouseX < 1050 && mouseY > 510 && mouseY < 640) {
            repair = true;
            cherry_posx = mouseX;
            cherry_posy = mouseY-50;
        }
    }
    if (scene === 5) {
        if (mouseX > 830 && mouseX < 880 && mouseY > 150 && mouseY < 430) {
            repair = true;
            bleed_posx = mouseX;
            bleed_posy = mouseY + windowHeight/2 + 10;
        }
    }
    if (scene === 6) {
        if (mouseX > 1480 && mouseX < 1620 && mouseY > 540 && mouseY < 630) {
            repair = true;
            hand_posx = mouseX - 900;
            hand_posy = mouseY - 300;
        }
    }
    if (scene === 7) {
        if (mouseX > 1140 && mouseX < 1375 && mouseY > 260 && mouseY < 450) {
            repair = true;
            del_posx = mouseX;
            del_posy = mouseY + windowHeight/2 + 10;;
    }
    }
}
//resetting the game
function reset() {
    scene = 0;
    count = 60*3;
    repair = false;
    f1v = 0;
    f2v = -80;
    finger_increment = 150;
    gameover_count = 3*60;
    credit_count = 6*60;
}

//resize game to window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function intro() {
    background(255);
    image(title, windowWidth/2, windowHeight/2-50);
    image(click1, windowWidth/2, windowHeight-250);
}

function instructions() {
    if (count > 30 ) {
        background(255);
        image(howtoplay, windowWidth/2, windowHeight/2);
        count -= 1;
    } else if (count > 0) {
        background(0);
        image(go, windowWidth/2, windowHeight/2);
        count -= 1;
    } else {
        count = 60*20;
        scene = random(scene_array);
    }
}

function complete() {
    if (count > 0) {
        count -= 1;
    } else {
        scene = 8;
    }
    
    if (feedback_count > 0) {
        background(0);
        image(done, windowWidth/2, windowHeight/2);
        feedback_count -= 1;
    } else {
        feedback_count = 30;
        scene = random(scene_array);
    }
}
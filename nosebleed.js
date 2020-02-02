function noseBleed() {
    var m = map(count, 60*20, 0, windowWidth, 0);
    background(255);
    fill(200);
    strokeWeight(0)
    rect(windowWidth/2, windowHeight-10, m, 10);
    image(bleed, windowWidth/2 - 100, windowHeight/2 - 50);
        
    if (repair) {
        image(smile, windowWidth/2, windowHeight/2 + 200);
        image(finger3, bleed_posx, bleed_posy);
        if (feedback_count > 0) {
            feedback_count -= 1;
        } else {
            feedback_count = 30;
            repair = false;
            scene = 99;
        }
    } else {
        image(frown, windowWidth/2, windowHeight/2 + 200);
        image(finger3, mouseX, mouseY + windowHeight/2 + 10);
    }
    
    fill(255);
    rect(windowWidth/2, windowHeight/2 - 400, 450, 450);
    image(nose, windowWidth/2, windowHeight/2 - 300);
    
    if (count > 0) {
        count -= 1;
    } else {
        scene = 8;
    }
}
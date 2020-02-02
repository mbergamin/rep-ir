function gelato() {
    var m = map(count, 60*20, 0, windowWidth, 0);
    background(255);
    fill(200);
    strokeWeight(0)
    rect(windowWidth/2, windowHeight-10, m, 10);
    image(icecream, windowWidth/2, windowHeight/2);
    image(finger2, mouseX-finger_increment, mouseY-windowHeight/2-100);
    if (repair){
        image(cherry, cherry_posx, cherry_posy);
        if (feedback_count > 0) {
            feedback_count -= 1;
            if (finger_increment < 150) finger_increment += 10;
        } else {
            feedback_count = 30;
            repair = false;
            scene = 99;
        }
    } else {
        finger_increment = 40;
        image(cherry, mouseX, mouseY-50);
    }
    image(finger1, mouseX+finger_increment, mouseY-windowHeight/2-100);

    if (count > 0) {
        count -= 1;
    } else {
        scene = 8;
    }
    
}
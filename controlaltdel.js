function controlAltDel() {
    var m = map(count, 60*20, 0, windowWidth, 0);
    background(255);
    fill(200);
    strokeWeight(0)
    rect(windowWidth/2, windowHeight-10, m, 10);
    
    if (repair) {
        image(cad2, windowWidth/2, windowHeight/2 + 11);
        image(finger3, del_posx, del_posy);
        if (feedback_count > 0) {
            feedback_count -= 1;
        } else {
            feedback_count = 30;
            repair = false;
            scene = 99;
        }
    } else {
        image(cad1, windowWidth/2, windowHeight/2);
        image(finger3, mouseX, mouseY + windowHeight/2 + 10);
    }
    
    if (count > 0) {
        count -= 1;
    } else {
        scene = 8;
    }
}
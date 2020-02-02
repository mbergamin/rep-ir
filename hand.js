function plumber() {
    var m = map(count, 60*18, 0, windowWidth, 0);
    background(255);
    fill(200);
    strokeWeight(0)
    rect(windowWidth/2, windowHeight - 10, m, 10);
    image(pipe, windowWidth/2 + 600, windowHeight/2);
    
    if (repair){
        image(hand, hand_posx, hand_posy);
        if (feedback_count > 0) {
            feedback_count -= 1;
        } else {
            feedback_count = 30;
            repair = false;
            scene = 99;
        }
    } else {
        image(hand, mouseX - 900, mouseY - 300); 
    }   
    
    if (count > 0) {
        count -= 1;
    } else {;
        scene = 8;
    }
}
function tree(){
    var m = map(count, 60*20, 0, windowWidth, 0);
    background(255);
    fill(200);
    strokeWeight(0)
    rect(windowWidth/2, windowHeight-10, m, 10);
    image(trunk, windowWidth/2, windowHeight/2+150);
        
    if (repair) {
        if (feedback_count > 0) {
            feedback_count -= 1;
        } else {
            feedback_count = 30;
            repair = false;
            scene = 99;
        }
        image(chop, tree_posx, tree_posy);
        image(bandaid, windowWidth/2-80, windowHeight/2+100);
    } else {
        image(chop, mouseX, mouseY - windowHeight/2);
    }
    

    
    if (count > 0) {
        count -= 1;
    } else {
        scene = 8;
    }
}
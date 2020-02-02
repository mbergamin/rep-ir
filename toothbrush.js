var toothbrush_win = 1;
var fh = 40;

function toothbrush() {
    var m = map(count, 60*20, 0, windowWidth, 0);
    f1h = mouseX + finger_increment;
    f2h = mouseX - finger_increment;
    f1v = mouseY - windowHeight/2 + fh;
    f2v = mouseY - windowHeight/2 - fh;
    
    background(255);
    fill(200);
    strokeWeight(0);
    rect(windowWidth/2, windowHeight-10, m, 10);
    image(finger2, f2h, f2v);
    image(toothbrush_status, windowWidth/2, windowHeight/2);
    image(finger1, f1h, f1v);
    
    if (repair) {
        if (toothbrush_win === 1) {
            if (finger_increment > 40){
                finger_increment -= 20;
                fh -= 2;
            } else {
                toothbrush_status = toothbrush2;
                toothbrush_win = 2;
            }
    
        } else if (toothbrush_win === 2) {
            if (finger_increment < 150) {
                finger_increment += 10;
                fh += 1;
            } else {
                if (feedback_count > 0) {
                    feedback_count -= 1;
                } else {
                    feedback_count = 30;
                    toothbrush_win = 1;
                    toothbrush_status = toothbrush1;
                    repair = false;
                    scene = 99;
                }
            }
        }
    }        
    
    
    if (count > 0) {
        count -= 1;
    } else {
        scene = 8;
    }
}
const accessCode1 = "NATURE";
const accessCode2 = "ANIMAL";
const accessCode3 = "FOREST";

function clues() {

    fill("white");
    textSize(15);
    text("ETUNRA", displayWidth/3-100, displayHeight/2+25);

    fill("red");
    textSize(15);
    text("HINT: NATURAL",displayWidth/3-100,displayHeight/2);

    fill("white");
    textSize(15);
    text("NMILAA", displayWidth/2+340,displayHeight/2.2+80); 

    fill("red");
    textSize(15);
    text("HINT: FOUND IN NATURE",displayWidth/2+340, displayHeight/2.2+50);

    fill("white");
    textSize(15);
    text("FESTRO", displayWidth/2+80, displayHeight/2+90);

    fill("red");
    textSize(15);
    text("HINT: TREES ARE FOUND HERE", displayWidth/2+80, displayHeight/2+60);
}
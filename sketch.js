let k;
function setup(){
//sensitive software    
    createCanvas(400,400);
    background(255);

    k = 0;
}

function draw(){
    stroke(05);
    line(200,399,200,0);
 
    fill(235,244,0);
    stroke(235,244,0);
    ellipse(100,200,110,115);
    fill(255);
    stroke(100);
    strokeWeight(5);
    ellipse(80,193,40,40);
    ellipse(120,193,40,40);
    fill(205, 24, 24);
    stroke(205, 24, 24);
    arc(100,218,30,30,0,3);
    fill(0);
    stroke(0);
    rect(45,190,15,1);
    rect(140,190,15,1);
    stroke(255);
    rect(98,220,1,1);
    rect(105,220,1,1);
    fill(112, 98, 51);
    stroke(111, 98, 51);
    ellipse(128,193,8,10);
    ellipse(88,193,8,10);
    fill(0);
    stroke(0);
    ellipse(130,193,5,5);
    ellipse(90,193,5,5);
    stroke(255);
    ellipse(131,193,1,1);
    ellipse(91,193,1,1);
        
    
    fill(235,244,0);
    stroke(235,244,0);
    ellipse(300,200,110,115);
    fill(255);
    stroke(100);
    strokeWeight(5);
    ellipse(280,193,40,40);
    ellipse(320,193,40,40);
    fill(205, 24, 24);
    stroke(205, 24, 24);
    arc(300,218,30,30,0,3);
    fill(0);
    stroke(0);
    rect(245,190,15,1);
    rect(340,190,15,1);
    stroke(255);
    rect(298,220,1,1);
    rect(305,220,1,1);
    var x = 285 + 4* Math.sin(PI/450*k)
    k += 1;
    fill(112, 98, 51);
    stroke(111, 98, 51);
    ellipse(x,193,8,10);
    var x = 325 + 4* Math.sin(PI/450*k)
    k += 1;
    fill(112, 98, 51);
    stroke(111, 98, 51);
    ellipse(x,193,8,10);
    var x = 285 + 5* Math.sin(PI/450*k)
    k += 1;
    fill(0);
    stroke(0);
    ellipse(x,193,5,5);
    var x = 325 + 5* Math.sin(PI/450*k)
    k += 1;
    fill(0);
    stroke(0);
    ellipse(x,193,5,5);
    var x = 285 + 7* Math.sin(PI/450*k)
    k += 1;
    stroke(255);
    ellipse(x,193,1,1);
    var x = 325 + 7* Math.sin(PI/450*k)
    k += 1;
    stroke(255);
    ellipse(x,193,1,1);
    
}
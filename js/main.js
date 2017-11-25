var brain;
var oldBrain;
var coord = [];
var population = 500;
function setup(){
	createCanvas(800,800);

	for(var i = 0; i < population; i++){
		coord[i] = new points();
	}


	brain = new perceptron(4);
}

/*
function mouseClicked(){
	for(var i = 0; i < coord.length; i++){
		//coord[i].show();

		input = [coord[i].x,coord[i].y,coord[i].x,1];
		brain.train(input, coord[i].label);

		guess = brain.guess(input, coord[i].label);
	}

}
*/
function draw(){
	background(51);
	translate(width/2,height/2);
	for(var i = 0; i < coord.length; i++){
		var x = coord[i].x;
		var y = coord[i].y;
		input = [y,x*x,x,1];
		brain.train(input, coord[i].label);
		guess = brain.guess(input, coord[i].label);

		if(guess == coord[i].label){
			fill(0, 255, 0);
		}
		else{
			fill(255, 0, 0);
		}
		stroke(0,0,0);
		ellipse(coord[i].px(), coord[i].py(), 5, 5);

	}

	//parable
	var p1 = {x: -3, y: fx(-3)}
	var p2 = {x: -1, y: fx(-1)}
	var p3 = {x: 1 , y: fx(1)}
	var p4 = {x: 3 , y: fx(3)}


	w0 = brain.weights[0];
	w1 = brain.weights[1];
	w2 = brain.weights[2];
	w3 = brain.weights[3];

	a = -w1/w0;
	b = -w2/w0;
	c = -w3/w0;

	function bfx(x){
		return a*x*x+b*x+c;
	}

	//brain
	var bp1 = {x: -3, y: bfx(-3)}
	var bp2 = {x: -1, y:   bfx(-1)}
	var bp3 = {x: 1 , y:   bfx(1)}
	var bp4 = {x: 3 , y: bfx(3)}

	noFill();
	stroke(0);
	curve(bp1.x*400, -bp1.y*400, bp2.x*400, -bp2.y*400, bp3.x*400, -bp3.y*400, bp4.x*400, -bp4.y*400);
	stroke(255,255,255);
	line(-width/2,0,width/2,0);
	line(0,height/2,0,-height/2);
	stroke(0,255,0);

	curve(p1.x*400, -p1.y*400, p2.x*400, -p2.y*400, p3.x*400, -p3.y*400, p4.x*400, -p4.y*400);

	
	console.log("f(x) = "+(-w1/w0).toFixed(3)+"x^2 + "+(-w2/w0).toFixed(3)+"x + "+(-w3/w0).toFixed(3));

}

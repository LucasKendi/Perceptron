function points(){


	this.x = random(-1, 1);
	this.y = random(-1, 1);

	this.rule = function(){
		if(fx(this.x) > this.y){
			return -1;
		}
		else{
			return 1;
		}
	}

	this.label = this.rule();


	this.show = function(){
		noFill();
		ellipse(this.px() ,this.py(), 10, 10);
	}

	this.px = function(){
		return map(this.x, -1, 1, -width/2, width/2);
	}

	this.py = function(){
		 return map(this.y, -1, 1, height/2, -height/2);
	}
}

function fx(x){
		return (2*x*x-3*x-1);
}
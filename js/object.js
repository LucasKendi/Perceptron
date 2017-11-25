function perceptron(x){

	var weights = [];
	var lr = 1/population
	for(var i = 0; i < x; i++){
		weights[i] = random(-1,1);
	}
	this.weights = weights;

	this.guess = function(array){
		var sum = 0;
		for(var i = 0; i < weights.length; i++){
			sum+=array[i]*weights[i];
		}

		return Math.sign(sum);
	}

	this.train = function(input, target){
		var guess = this.guess(input);
		var error = target - guess;

		for(var i = 0; i < this.weights.length; i++){
			this.weights[i] += error*input[i]*lr;
		}
	}

}

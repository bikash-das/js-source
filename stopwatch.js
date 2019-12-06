function stopwatch(){
	let start, end, isRunning, duration=0;
	
	this.start = function(){
		if(isRunning){
			console.log('Error: already started');
			return;
		}
		isRunning  = true;
		start = Date.now(); //datetime
	}
	this.stop = function(){
		if(!isRunning){
			console.log('Error');
			return;
		}
		isRunning = false;
		end = Date.now();  
		duration = end - start;
	}
	this.reset = function(){
		start = null;
		end = null;
		isRunning = false;
		duration  = 0;
	}
	//get duration
	Object.defineProperty(this, 'duration', {
		get: function(){
			return duration;
		}
	});
}
const sw = new stopwatch();
sw.start();
console.log(sw.duration);
for(let i = 0; i < 1000000000; i++){
}
sw.stop();
console.log(`duration in millisecond: ${sw.duration}`);

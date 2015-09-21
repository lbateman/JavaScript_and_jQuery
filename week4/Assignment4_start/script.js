var churchillSpeech = {
	'name' : 'Winston Churchill',
	'year' : 1940,
	'bce' : false
} ;

var gandhiSpeech = {
	'name' : 'Mahatma Ghandi',
	'year' : 1942,
	'bce' : false
} ;

var demosthenesSpeech = {
	'name' : 'Demosthenes',
	'year' : 342,
	'bce' : true
} ;

var speechArray = [
	churchillSpeech,
	gandhiSpeech,
	demosthenesSpeech
] ;

var speechDiff = gandhiSpeech.year - churchillSpeech.year;

console.log("Ghandi's speech and Churchill's speech are " + speechDiff + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
	console.log("There are " + speechArray.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
	console.log("This speech was written by " + churchillSpeech.name + " in " + churchillSpeech.year + ". It is " + churchillSpeech.bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	console.log("This speech was written by " + gandhiSpeech.name + " in " + gandhiSpeech.year + ". It is " + gandhiSpeech.bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
	console.log("This speech was written by " + demosthenesSpeech.name + " in " + demosthenesSpeech.year + ". It is " + demosthenesSpeech.bce + " that this year is B.C.E.");
});
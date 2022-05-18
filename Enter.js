var sections = [
		// {	sentence: "Everything Site"
		// },
		// {	sentence: "Music Reviews"
		// },
		// {	sentence: "Electronics Project's"
		// },
		// {	sentence: "Coding Project's"
		// },
		// {	sentence: "Cool Vinyl's"
		// },
		// {	sentence: "All Coded By Me!"
		// }
		{	sentence: "Site Is Under Construction"
		}
	];
var i = 0;
var j = 0;
var k = 0;
var lengthSentence = 0;
var lengthArray = sections.length;
var forward = true;
var beginning = "Rhys Grover's";
var currentPart = "";
var interval = 50;
var opening = false;
var pauseEnd = 2500;

function writing(text){
	lengthSentence = sections[i].sentence.length;
	var body = $("body");
	if(!opening){
		setTimeout(function(){
			if(k < beginning.length){
				if(beginning[k] === "<"){
					currentPart += ' <br id="brName">';
					k=k+4;
				}
				currentPart += beginning[k];
				text.html(currentPart);
				k++;
				writing(text);
			}else if(k === (beginning.length)){
				currentPart += " <br>";
				text.html(currentPart);
				opening = true;
				writing(text);
			}
		},interval);
	}else if(opening){
		setTimeout(function(){
			interval = 50;
			if(j === lengthSentence){
				forward = false;
			}
			if(j === lengthSentence-2){
				$(".original").one().addClass("onScreen");
			}
			if( j === lengthSentence-1 && forward){
				interval = pauseEnd;
			}
			if(j < lengthSentence && forward ){
				if(sections[i].sentence[j] === "&"){
					currentPart += "<strong>";
				}else if(sections[i].sentence[j] === "%"){
					currentPart += "</strong>";
				}
				else{
					currentPart += sections[i].sentence[j];
				}
				text.html(currentPart);
				j++;
			}else if(j > 0 && !forward){
				if(sections[i].sentence[j] === "&"){
					currentPart = currentPart.slice(0, - 8);
				}else if(sections[i].sentence[j] === "%"){
					currentPart = currentPart.slice(0, - 9);
				}
				else{
					currentPart = currentPart.slice(0, - 1);
				}
				text.html(currentPart);
				j--;
			}else if(j === 0){
				forward = true;
				i++;
			}
			if(i === lengthArray){
				i = 0;
			}
			writing(text);
		}, interval);
	}
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}
function changebackground(){
	var body = $("body");
    var h = rand(1, 360);
    var s = rand(80, 90);
    var l = rand(50, 60);
    body.css({
    	"background" : "hsl(" + h + "," + s + "%,"+ l + "%)"
    });
}

$(document).ready(function(){

	var firstTimer = 1500;
	var text = $(".jstext");
	setTimeout(function(){
		writing(text);
	}, firstTimer);

});

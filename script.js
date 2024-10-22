var seconds = 0;

function timeWaste(number){
    seconds = seconds + number;
    document.getElementById("seconds").innerHTML = seconds;
};
window.setInterval(function(){	
	timeWaste(1);
}, 1000);

var i = 0;

var interval = setInterval( increment, 1000);

function increment(){
    i = i + 1;
    document.getElementById("seconds").innerHTML = i;
}

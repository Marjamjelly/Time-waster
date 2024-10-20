var seconds = 0;

function timeWaste(number){
    seconds = seconds + number;
    document.getElementById("seconds").innerHTML = seconds;
};
window.setInterval(function(){	
	timeWaste(1);
}, 1000);


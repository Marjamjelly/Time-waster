var seconds = 0;
function add(number){
    seconds = seconds + number;
    document.getElementById("seconds").innerHTML = seconds;
};
window.setInterval(function(){
	add(1);
}, 1000);

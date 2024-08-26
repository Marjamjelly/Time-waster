var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};
window.setInterval(function(){	
	cookieClick(1);
}, 1000);

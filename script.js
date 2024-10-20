const secondsCount = document.querySelector(".seconds");
const level = document.querySelector(".grade");

const levels = {
    5: "Sr Assistant",
    10: "Jr Honoror",
    15: "Master Honoror",
    35: "S Tier Honoror",
    65: "Junior Acolyte",
    105: "Acolyte",
    150: "Senior Acolyte",
    250: "Priest",
    450: "Sage",
    650: "Hermit",
    1000: "Senior Hermit",
    1500: "CEO",
    2500: "Pope",
    3500: "Underlord",
    4500: "Lord",
    10500: "OverLord",
    20500: "King",
    30500: "Anunnaki"
}

var seconds = 0;

function timeWaste(number){
    seconds = seconds + number;
    document.getElementById("seconds").innerHTML = seconds;
};
window.setInterval(function(){	
	timeWaste(1);
}, 1000);

const newTime = Math.floor((Date.now() - startTime) / 1000);

secondsCount.innerText = newTime;

if(levels[newTime]) {
    level.innerText = levels[newTime]
}

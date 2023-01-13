let doOrNot;

let count = 0;

function redStart(){
    if(!doOrNot) return false;
    document.getElementById('third').classList.remove('green')
    document.getElementById('first').classList.add('red')
}

function yellowStart(){
    if(!doOrNot) return false;
    document.getElementById('second').classList.add('yellow')
}

function greenStart(){
    if(!doOrNot) return false;
    document.getElementById('first').classList.remove('red')
    document.getElementById('second').classList.remove('yellow')
    document.getElementById('third').classList.add('green')
}

function infinityTrafficLight(){
    trafficLightStart();
    setTimeout(infinityTrafficLight, 8500);
}

function trafficLightStart() {
    redStart();
    setTimeout(yellowStart, 3000);
    setTimeout(greenStart, 3500);
    setTimeout(redStart, 7000);
}

function trafficLightReset(){
    doOrNot = false;
    count = 0;
    document.getElementById('first').classList.remove('red');
    document.getElementById('second').classList.remove('yellow');
    document.getElementById('third').classList.remove('green');
}

document.getElementById('btn-start').onclick = function() {
    doOrNot = true;
    infinityTrafficLight();
}

document.getElementById('btn-reset').onclick = function() {
    trafficLightReset();
}

// change-btn

function changeRed(){
    document.getElementById('third').classList.remove('green');
    document.getElementById('first').classList.add('red');
    count++;
}

function changeYellow(){
    document.getElementById('first').classList.remove('red');
    document.getElementById('second').classList.add('yellow');
    count++;
}

function changeGreen(){
    document.getElementById('second').classList.remove('yellow');
    document.getElementById('third').classList.add('green');
    count = 0;
}

function trafficLightChange(){
    if(count == 0) {
        changeRed();
    } 
    
    else if(count == 1){
        changeYellow();
    } 
    
    else if(count == 2){
        changeGreen();
    }
}

document.getElementById('btn-change').onclick = function() {
    trafficLightChange();
}
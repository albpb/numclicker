function countdown(minutes) {
    let current = new Date();

    timestamp = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours(), current.getMinutes() + minutes, current.getSeconds(), current.getMilliseconds());
    setInterval(timer, 1000);

}


function timer() {
    let now = new Date();
    
    if (!paused) {
        let diff = timestamp.getTime() - now.getTime(); 
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        if (minutes < 10) {
            minutes = "0"+minutes;
        }
        if (seconds < 10){
            seconds = "0"+seconds;
        }
        if (minutes == 0 && seconds == 0){
            lose();
        }else{
            document.getElementById("timer").innerHTML = minutes + ":" +seconds;
        }
    }
    
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
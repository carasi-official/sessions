import { useState } from "react";

function Timer(){
    //grab dom elements
    const timerButton = document.getElementById('timerButton');
    const pause = document.getElementById('pauseTime');
    const resume = document.getElementById('resumeTime');
    const display = document.getElementById('display');

    //set useState variables
    //const [minutes, setMinutes] = useState(3);
    //const [seconds, setSeconds] = useState(59);
    let minutes = 3;
    let timer;
    for(let x = 0; x < 3; x++){
        console.log(minutes);
        minutes--;

    }
    clearInterval(timer);
    //two counters - one for minutes, one for seconds
    //two loops - one for the 60 seconds, one for the minutes. when min and seconds = 0 -- countdown complete

    // function countDown(){
    //     timer = setInterval(()=>{
    //         let currentDisplayTime = document.getElementById('displayTime')
    //         let p = document.createElement('p');
    //         currentDisplayTime.remove();
    //
    //         if(seconds >= 0){
    //             if (seconds < 10){
    //                 p.innerHTML = `${minutes} : 0${seconds}`;
    //             }else{
    //                 p.innerHTML = `${minutes} : ${seconds}`;
    //             }
    //             seconds--;
    //             p.id = 'displayTime';
    //             display.append(p);
    //         }else{
    //             if(minutes === 0){
    //                 p.innerHTML = `Count Down Complete`;
    //                 p.id = 'displayTime';
    //                 display.append(p);
    //             }else{
    //                     minutes--;
    //                     seconds = 59;
    //             }
    //         }
    //     }, 1000)
    // }

    timerButton.addEventListener('click', ()=>{
        timerButton.style.display = 'none';
        console.log(minutes);
        seconds = 59;
        if (minutes > -1 && seconds > -1){
            minutes--;
            countDown();
        }
    })

    pause.addEventListener("click", ()=>{
        console.log('pause clicked');
        clearInterval(timer);
        console.log(minutes, seconds);
    })

    resume.addEventListener("click", ()=>{
        console.log('resume clicked');
        countDown();
    })



    return (
        <div>
            <button id="timerButton">Start Count Down</button>
            <div id="display">
                <p id="displayTime">{minutes} : 00</p>
            </div>
            <button id="pauseTime">Pause</button>
            <button id="resumeTime">Resume</button>
            <button id="reset">Reset</button>
        </div>
    )
}

export default Timer;
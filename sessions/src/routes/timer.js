import { useState } from "react";

function Timer(){
    //grab dom elements

    let pause = document.getElementById('pauseTime');
    let resume = document.getElementById('resumeTime');


    const seconds = 59;
    let counterMinutes = 2; //eventually this will prompt the user for a value and subtract the result by one
    let counterSeconds = 0;
    let timer;

    //the async needs to happen in the second function, not the minutes

    async function counter(){
        return new Promise((resolve)=>{
            let display = document.getElementById('display');
            let currentDisplayTime = document.getElementById('displayTime')
            let p = document.createElement('p');
            currentDisplayTime.remove();
            console.log(`${counterMinutes}:${counterSeconds}`);
            if (counterMinutes < 10){
                if (counterSeconds < 10){
                    p.innerHTML = `0${counterMinutes}:0${counterSeconds}`;
                }else{
                    p.innerHTML =`0${counterMinutes}:${counterSeconds}`;
                }
            }else{
                if (counterSeconds < 10){
                    p.innerHTML = `${counterMinutes}:0${counterSeconds}`;
                }else{
                    p.innerHTML= `${counterMinutes}:${counterSeconds}`;
                }
            }
            p.id = 'displayTime';
            display.append(p);
            resolve("seconds function called");
        }, 1000);
    }

    async function secondsFunc(){

        let counterSecs = counterSeconds; //unfortunate reliance on a global variable
        for (let x = 0; x <= counterSecs; x++){
            const result = await counter();
            counterSeconds--;
        }
        counterSeconds = seconds; // global variable reset

    }

    function counterFunc () {
        let counterMins = counterMinutes;
        for(let x = counterMins; x > 0; x--){
            secondsFunc();
            counterMinutes--;
        }
    }

    //two counters - one for minutes, one for seconds
    //two loops - one for the 60 seconds, one for the minutes. when min and seconds = 0 -- countdown complete


    let timerButtonClick = () =>{
        counterFunc();
    }

    let pauseClick = () =>{
        console.log('pause clicked');
        clearInterval(timer);
    }

    let resumeClick = () =>{
        console.log('resume clicked');
        counterFunc();
    }


    return (
        <div>
            <button id="timerButton" onClick={timerButtonClick}>Start Count Down</button>
            <div id="display">
                {/* test - this is an odd way to do comments but sure*/}
                {/*load display with a function?*/}
                <p id="displayTime">{counterMinutes+1}:00</p>
            </div>
            <button id="pauseTime" onClick={pauseClick}>Pause</button>
            <button id="resumeTime" onClick={resumeClick}>Resume</button>
            <button id="reset">Reset</button>
        </div>
    )
}

export default Timer;
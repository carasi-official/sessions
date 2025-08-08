import { useState, useEffect } from "react";

function Timer(){
    //grab dom elements

    let pause = document.getElementById('pauseTime');
    let resume = document.getElementById('resumeTime');

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(45);
    const [active, setActive] = useState(false);

    useEffect(()=>{
        if (active){
            let display = document.getElementById('display');
            let currentDisplayTime = document.getElementById('displayTime')
            let p = document.createElement('p');
            currentDisplayTime.remove();
            if (minutes < 10){
                if (seconds < 10){
                    p.innerHTML = `0${minutes}:0${seconds}`;
                }else{
                    p.innerHTML =`0${minutes}:${seconds}`;
                }
            }else{
                if (seconds < 10){
                    p.innerHTML = `${minutes}:0${seconds}`;
                }else{
                    p.innerHTML= `${minutes}:${seconds}`;
                }
            }
            p.id = 'displayTime';
            display.append(p);

            if (seconds !== 0 && minutes !== 0){
                counterFunc();
            } else if(seconds === 0 && minutes !==0){
                setMinutes(minutes-1);
                setSeconds(59);
                counterFunc();
            } else if(seconds === 0 && minutes === 0){
                console.log("Loop is finished, countdown complete");
            }
        }

    }, [seconds, active])

    useEffect(() => {
        if (!active){
            setSeconds(59);
            let display = document.getElementById('display');
            let currentDisplayTime = document.getElementById('displayTime')
            currentDisplayTime.remove();
            let p = document.createElement('p');
            if (minutes < 10){
                if (seconds < 10){
                    p.innerHTML = `0${minutes}:0${seconds}`;
                }else{
                    p.innerHTML =`0${minutes}:${seconds}`;
                }
            }else{
                if (seconds < 10){
                    p.innerHTML = `${minutes}:0${seconds}`;
                }else{
                    p.innerHTML= `${minutes}:${seconds}`;
                }
            }
            p.id = 'displayTime';
            display.append(p);
        }
    }, [minutes, active])


    function counterFunc () {
       const second = setTimeout(() =>{
           if(seconds!== 0){
               setSeconds(seconds-1);
           }
        }, 1000);
    }


    let timerButtonClick = () =>{

        let start = document.getElementById('start');
        if(start.innerHTML === "START"){
            start.innerHTML = "PAUSE";
            setActive(true);
            setMinutes(minutes-1);
            counterFunc();
        } else if (start.innerHTML === "PAUSE"){
            start.innerHTML = "RESUME";
            setActive(false);
        } else if (start.innerHTML === "RESUME"){
            start.innerHTML = "PAUSE";
            setActive(true);
        }
    }

    let setTimer = (min) => {
        setActive(false);
        setSeconds(0);
        setMinutes(min);
        let start = document.getElementById('start');
        start.innerHTML = "START";
    }

    const min45 = () =>{
        setTimer(45);
    }
    const min25 = () =>{
       setTimer(25);
    }
    const min5 = () =>{
        setTimer(5);
    }


    return (
        <div>
            {/*oddly mad at the button for whatever reason */}
            <button id="timerButton" onClick={min45}>45 minutes</button>
            <button id="timerButton" onClick={min25}>25 minutes</button>
            <button id="timerButton" onClick={min5}>5 minutes</button>

            <br />

            <div id="display">
                <p id="displayTime">{minutes}:00</p>
            </div>

            <button id="start" onClick={timerButtonClick}>START</button>

        </div>
    )
}

export default Timer;
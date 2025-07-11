const display=document.getElementById("display")
const info_lap=document.getElementById("info_lap")
const main_container=document.getElementById("main_container")
let time=null
let startTime=0
let elapsedTime=0
let isRunning=false
function start(){
    if (!isRunning){
        startTime=Date.now()-elapsedTime
        time=setInterval(update,10)
        isRunning=true

    }

}
function stop(){
    clearInterval(time)
    isRunning=false

}

function reset(){
     clearInterval(time)
    startTime=0
    elapsedTime=0
    isRunning=false
    display.textContent="00:00:00"
    info_lap.style.display="none"
    document.getElementById("lapList").innerHTML = "";
    main_container.style.height="400px";



    
}
function lap(){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");


    const lapTime=`${hours}:${minutes}:${seconds}:${milliseconds}`;
    
    const lapList = document.getElementById("lapList");
    const newLap = document.createElement("li");
    newLap.textContent = lapTime;
    lapList.appendChild(newLap);

     

     
    info_lap.style.display = "block";
    main_container.style.height="500px";
    isRunning=false
    info_lap.style.fontSize="32px";
    info_lap.style.fontWeight="bold"



}
function update(){
    const currentTime = Date.now()
    elapsedTime=currentTime-startTime
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.style.fontSize="32px";
    display.style.fontWeight="bold"

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

   

    
}
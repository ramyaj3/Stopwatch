let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let isRunning = false;
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
function formatTime(ms) {
   const totalSeconds = Math.floor(ms / 1000);
   const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
   const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
   const seconds = String(totalSeconds % 60).padStart(2, '0');
   return `${hours}:${minutes}:${seconds}`;
}
function startWatch() {
   if (isRunning) return;
   startTime = Date.now() - elapsedTime;
   intervalId = setInterval(() => {
       elapsedTime = Date.now() - startTime;
       timeDisplay.textContent = formatTime(elapsedTime);
   }, 100);
   isRunning = true;
}
function stopWatch() {
   if (!isRunning) return;
   clearInterval(intervalId);
   isRunning = false;
}
function resetWatch() {
   if (isRunning) stopWatch();
   elapsedTime = 0;
   timeDisplay.textContent = '00:00:00';
}
startBtn.addEventListener('click', startWatch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetWatch);
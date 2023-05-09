import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    dateTime: document.querySelector('#datetime-picker'),
    dataStart: document.querySelector('button[data-start]'),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]'),
}
let selectedDate = null;
refs.dataStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {

    if (selectedDates[0].getTime() < Date.now()) {
      window.alert("Please choose a date in the future");
    } else {
      selectedDate = selectedDates[0].getTime();
      refs.dataStart.disabled = false;
      clearInterval(timer.intervalId);
      timer.isActive = false;
    }
    
  },
};

flatpickr(refs.dateTime, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
};

  function addLeadingZero(value) {
    return String(value).padStart(2, 0);
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    
      if (this.isActive) { return; }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = selectedDate - currentTime;
      
      if (deltaTime <= 0) {
        stop(); return;
      }
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.dataDays.textContent = days;
      refs.dataHours.textContent = hours;
      refs.dataMinutes.textContent = minutes;
      refs.dataSeconds.textContent = seconds;
    }, 1000);
  }
}
function stop () {  
    timer.intervalId = null;
    refs.dataStart.disabled = true;
};

refs.dataStart.addEventListener('click', () => {
  timer.start();
})


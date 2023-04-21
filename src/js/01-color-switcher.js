const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const changeColor = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) { return; }
        this.isActive = true;
        this.intervalId = setInterval(() => { refs.body.style.background = getRandomHexColor() }, 1000)
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
},
};
refs.btnStart.addEventListener('click', () => { changeColor.start(); });

refs.btnStop.addEventListener('click', () => { changeColor.stop(); });
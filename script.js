// KLASA I USTAWIENIE POCZĄTKOWEGO STANU KOMPONENTU
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    }
    // this.running = false;
    // this.display = display;
    // this.reset();
    // this.print(this.times);
  }
    render() {
      return (
        document.getElementById("app")
      );
    }
  }

  // Zerowanie stopera
  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  // Wyświetlenie stopera
  print() {
    this.display.innerText = this.format(this.times);
  }

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
  }

  // Uruchomienie stopera
  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  // Sprawdzenie, czy stoper jest uruchomiony
  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  // Przeliczenie czasu
  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }

  // Zatrzymanie stopera
  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  // Resetowanie czasu
  resetTimer() {
    this.reset();
    this.print();
  }
}

// Funkcja, odpowiadająca za tworzenie liczb dwucyfrowych
function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result
}

const stopwatch = new Stopwatch(
  document.querySelector(".stopwatch")
);

//Przyciski
let startButton = document.getElementById("start");
startButton.addEventListener("click", () => stopwatch.start());

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => stopwatch.stop());

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => stopwatch.resetTimer());
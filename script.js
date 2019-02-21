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
    // this.start = this.start.bind(this);
    // this.stop = this.stop.bind(this);
    // this.reset = this.reset.bind(this);
  }

  format(times) {
    return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
  }

  start() {
    if (!this.running) {
      this.setState({running: true});
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
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
  
  stop() {
    this.setState({running: false});
    clearInterval(this.watch);
  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    });
  }

  resetTimer() {
    this.stop();
    this.reset();
  }

  render() {
    return (
      <div>
        <nav className="controls">
          <a href="#" className="button start" id="start" onClick={() => this.start()}>Start</a>
          <a href="#" className="button stop" id="stop" onClick={() => this.stop()}>Stop</a>
          <a href="#" className="button reset" id="reset" onClick={() => this.reset()}>Reset</a>
        </nav>

        <div className="stopwatch"></div>
        <ul className="results"></ul>
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById("app")
);
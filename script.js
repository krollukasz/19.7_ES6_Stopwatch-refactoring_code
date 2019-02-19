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
  }
  render() {
    return (
      <div>
        <nav className="controls">
          <a href="#" className="button start" id="start">Start</a>
          <a href="#" className="button stop" id="stop">Stop</a>
          <a href="#" className="button reset" id="reset">Reset</a>
        </nav>

        <div className="stopwatch"></div>
        <ul className="results"></ul>
      </div>
    );
  }
}

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// KLASA I USTAWIENIE POCZĄTKOWEGO STANU KOMPONENTU
var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
      // this.start = this.start.bind(this);
      // this.stop = this.stop.bind(this);
      // this.reset = this.reset.bind(this);
    };return _this;
  }

  _createClass(Stopwatch, [{
    key: "format",
    value: function format(times) {
      return pad0(this.state.times.minutes) + ":" + pad0(this.state.times.seconds) + ":" + pad0(Math.floor(this.state.times.miliseconds));
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.running) {
        this.setState({ running: true });
        this.watch = setInterval(function () {
          return _this2.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
    }

    // Przeliczenie czasu

  }, {
    key: "calculate",
    value: function calculate() {
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
  }, {
    key: "stop",
    value: function stop() {
      this.setState({ running: false });
      clearInterval(this.watch);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      this.stop();
      this.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "controls" },
          React.createElement(
            "a",
            { href: "#", className: "button start", id: "start", onClick: function onClick() {
                return _this3.start();
              } },
            "Start"
          ),
          React.createElement(
            "a",
            { href: "#", className: "button stop", id: "stop", onClick: function onClick() {
                return _this3.stop();
              } },
            "Stop"
          ),
          React.createElement(
            "a",
            { href: "#", className: "button reset", id: "reset", onClick: function onClick() {
                return _this3.reset();
              } },
            "Reset"
          )
        ),
        React.createElement("div", { className: "stopwatch" }),
        React.createElement("ul", { className: "results" })
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

function pad0(value) {
  var result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById("app"));

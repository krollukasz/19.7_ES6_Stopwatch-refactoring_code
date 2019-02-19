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
    };
    _this.start = _this.start.bind(_this);
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "start",
    value: function start() {
      console.log('start!');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.start },
        this.state.running = true
      );
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "controls" },
          React.createElement(
            "a",
            { href: "#", className: "button start", id: "start" },
            "Start"
          ),
          React.createElement(
            "a",
            { href: "#", className: "button stop", id: "stop" },
            "Stop"
          ),
          React.createElement(
            "a",
            { href: "#", className: "button reset", id: "reset" },
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

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById("app"));

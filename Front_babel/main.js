'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _store = require('../Front_babel/store.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board(props) {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
    }

    _createClass(Board, [{
        key: 'render',
        value: function render() {
            //console.log("asda");
            //console.log(store.getState());
            //console.log(store.getState().headerInitState);
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: _store.store },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Main Page'
                    )
                )
            );
        }
    }]);

    return Board;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Board, null), document.getElementById('main'));
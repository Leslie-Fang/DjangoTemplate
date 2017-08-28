'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../Front_babel/action/index.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by leslie on 2017/7/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ signnup: _index.signup }, dispatch);
}

var Container2 = function (_React$Component) {
    _inherits(Container2, _React$Component);

    function Container2(props) {
        _classCallCheck(this, Container2);

        var _this = _possibleConstructorReturn(this, (Container2.__proto__ || Object.getPrototypeOf(Container2)).call(this, props));

        _this.state = { userNameValue: "please enter username", defaultUserNameValue: "please enter username",
            passwordValue: "please enter password", defaultPasswordValue: "please enter password" };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleusernameFocus = _this.handleusernameFocus.bind(_this);
        _this.handleusernameChange = _this.handleusernameChange.bind(_this);
        _this.handlepasswordFocus = _this.handlepasswordFocus.bind(_this);
        _this.handlepasswordChange = _this.handlepasswordChange.bind(_this);
        return _this;
    }

    _createClass(Container2, [{
        key: 'handleusernameChange',
        value: function handleusernameChange(event) {
            this.setState({ userNameValue: event.target.value });
            // console.log(event.target.value);
            // console.log(this.state.value);
        }
    }, {
        key: 'handlepasswordChange',
        value: function handlepasswordChange(event) {
            this.setState({ passwordValue: event.target.value });
            // console.log(event.target.value);
            // console.log(this.state.value);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            //var codedata = "username:"+this.state.userNameValue +"password:"+this.state.passwordValue;
            if (!/^[A-Za-z0-9]+$/.test(this.state.userNameValue)) {
                alert("用户名只能含有数字有字母!");
                return false;
            }
            if (!/^[A-Za-z0-9]+$/.test(this.state.passwordValue)) {
                alert("密码只能含有数字有字母!");
                return false;
            }
            this.props.signnup(this.state.userNameValue, this.state.passwordValue);
        }
    }, {
        key: 'handleusernameFocus',
        value: function handleusernameFocus(event) {
            // console.log('Onfocus');
            this.setState({ userNameValue: "" });
        }
    }, {
        key: 'handlepasswordFocus',
        value: function handlepasswordFocus(event) {
            // console.log('Onfocus');
            this.setState({ passwordValue: "" });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'exampleInputPassword1' },
                            'Username'
                        ),
                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'exampleInputUsername',
                            ref: 'verify',
                            value: this.state.userNameValue,
                            placeholder: this.state.defaultUserNameValue,
                            onFocus: this.handleusernameFocus,
                            onChange: this.handleusernameChange }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'exampleInputPassword1' },
                            'Password'
                        ),
                        _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'exampleInputPassword',
                            ref: 'verify',
                            value: this.state.passwordValue,
                            placeholder: this.state.defaultPasswordValue,
                            onFocus: this.handlepasswordFocus,
                            onChange: this.handlepasswordChange })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'text-center' },
                        _react2.default.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-primary' },
                            'signup'
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'btn btn-default', href: '/', role: 'button' },
                            'Back to main page'
                        )
                    )
                )
            );
        }
    }]);

    return Container2;
}(_react2.default.Component);

//store.dispatch({ type: 'INCREMENT' });

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Container2);
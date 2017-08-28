import {Provider} from 'react-redux';
import {store} from "../Front_babel/store.js"
import Container2 from "../Front_babel/container/container2.js";
import React from 'react';
import ReactDOM from 'react-dom';

export class Component2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className = "text-center">Signup</h1>
                <Container2 />
            </div>
        );
    }
}

class Board extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Component2 />
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('main'));

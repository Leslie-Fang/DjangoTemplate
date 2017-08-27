import {Provider} from 'react-redux';
import {store} from "../Front_babel/store.js"
import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        //console.log("asda");
        //console.log(store.getState());
        //console.log(store.getState().headerInitState);
        return (
            <Provider store={store}>
                <div >
                    <h1 >Main Page</h1>
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('main'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import state from "./localData";

ReactDOM.render(
    <BrowserRouter>
        <App state={ state } />
    </BrowserRouter>, document.getElementById('root')
);
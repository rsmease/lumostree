//utils
import React from 'react';
import ReactDOM from 'react-dom';

//root component
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

    //render components
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Hello, React!</h1>, root);

});
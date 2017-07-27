import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Header from './Header'
import Footer from './Footer'

ReactDOM.render(
    <App/>,
    document.getElementById('container')

);

ReactDOM.render(
    <Header/>,
    document.getElementById('header')
);

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
);
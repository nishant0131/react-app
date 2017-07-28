// we're importing React, which is the library that allows us to build React components. 
// We're also importing ReactDOM, which is the library that allows us to place our components 
// and work with them in the context of the DOM

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Header from './Header'
import Footer from './Footer'

ReactDOM.render(
   //props of components
    <App cat={4} jump="I am prop too from index"/>,
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
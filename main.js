import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


(function initData() {
    var renderViewTransform = JSON.parse(data);
    console.log(renderViewTransform.category[0]);
})();

ReactDOM.render(<App />, document.getElementById('app'));
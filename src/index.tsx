import React from 'react';
import ReactDOM from 'react-dom';

import AppView from ".//app/app";

const appHome = new AppView();

ReactDOM.render(appHome.AppHome(null), document.querySelector('#root'))


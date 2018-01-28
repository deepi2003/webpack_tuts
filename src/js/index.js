// require('./login');

import {validateLogin} from './login';
require('../css/index.css');
require('../css/app.scss');


document.write("Welcome to webpack tuts lets learn Hello !");

validateLogin('admin', 'admin');
console.log("App loaded");
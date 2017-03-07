// let name = require('./name.js')  //CommonJS规范
import name from './name'           //es6推荐

// require('./style.css')           //CommonJS规范
import './style.css'                //es6推荐

document.getElementById('app').textContent = `hello~${name}`
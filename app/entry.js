'use strict';
const  $ = require('jquery');
const  block = $('#block');
const  moving_Button = $('#moving-button');

moving_Button.click(() => {
  block.animate({ marginLeft: '500px'}, 2000);
  block.animate({ marginLeft: '20px'}, 2000);
});

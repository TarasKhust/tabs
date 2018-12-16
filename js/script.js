;(window.addEventListener('DOMContentLoaded', () => {

  'use strict';
  let slider = require('./slider'),
      form = require('./form'),
      modal = require('./modal'),
      timer = require('./timer'),
      tabs = require('./tabs');

  tabs(); // Tabs
  timer(); // Timer
  modal(); // Modal
  form(); // Form
  slider(); // Slider
}));

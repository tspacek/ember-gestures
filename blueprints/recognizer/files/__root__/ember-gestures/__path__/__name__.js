import Ember from 'ember';

export default {
  include: ['tap'], //an array of recognizers to recognize with.
  exclude: [], //an array of recognizers that must first fail
  options: {
    taps: 2  // the settings to pass to the recognizer, event will be added automatically
  },
  recognizer: 'tap' // `tap|press|pan|swipe|rotate|pinch` the base Hammer recognizer to use
};

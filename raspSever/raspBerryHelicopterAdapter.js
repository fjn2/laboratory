const gpio = require('rpi-gpio');

console.log('initialize adapter');
// initialize pin configuration
gpio.setup(11, gpio.DIR_OUT, this.setLight);

function setLight (value) {
  console.log('setLight');
  gpio.write(11, !!value, function(err) {
    if (err) throw err;

    console.log('The lights are ', value ? 'on' : 'off');
  })
}

module.exports = {
  setLight
};
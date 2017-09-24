let hardwareAdapter = {
  setLight: () => {}
};

module.exports = {
  setHardwareAdapter: (value) => {
    console.log('seting new adapter');
    hardwareAdapter = value;

  },
  gethardwareAdapter:(value) => (light),
  setLight: (value) => {
    light = value;
    console.log('hardwareAdapter', hardwareAdapter);
    hardwareAdapter.setLight(value);
  },
  getLight: (value) => (light)
};
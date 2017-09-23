const UdpNode = require('udp-node')
const six = new UdpNode()
six
  .set({
    name: 'reciber',
    type: 'machine'
  })
  .onNode((message, rinfo) => {
    // FOUND NODE
    // message: contains node's name, type and other details set when node was initialized using set()
    // rinfo: contains node's ip address and port
    console.log(message, rinfo);
  })
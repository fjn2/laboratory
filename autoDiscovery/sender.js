const UdpNode = require('udp-node')
const node = new UdpNode()


const message = {
      type: 'broadcast',
      node: {},
      address: '255.255.255.255'
    }

node.set({
  name: 'sender',
  type: 'pc'
}).send(message, () => {
  process.exit(0);
})
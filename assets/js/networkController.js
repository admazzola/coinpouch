
const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask'
const ROPSTEN_RPC_URL = 'https://ropsten.infura.io/metamask'
const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
const RINKEBY_RPC_URL = 'https://rinkeby.infura.io/metamask'
const LOCALHOST_RPC_URL = 'http://localhost:8545'

module.exports = {


  getInfuraURL(network_name)
  {

    switch(network_name)
    {
      case 'ropsten': return ROPSTEN_RPC_URL; break;
      default: return MAINET_RPC_URL; break;
    }



  }


}

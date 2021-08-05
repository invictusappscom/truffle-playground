var contract = artifacts.require('Weth')
var Web3 = require('web3')
let web3 = new Web3(
  new Web3.providers.WebsocketProvider('http://localhost:8545')
)

var contractWethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

const toMyAddress = '0x3A2e453dd78558F3bCB398aA6ae530A08fA7572D'
const fromRichAddress = '0xf04a5cc80b1e94c69b48f5ee68a08cd2f09a7c3e'
const payingFeeAddress = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'

module.exports = async (callback) => {
  let ins = await contract.at(contractWethAddress)

  console.log(ins.web3)
  //   let approve = await ins.contract.methods.approve(payingFeeAddress, '1000000000000000000').send({ from: fromRichAddress })
  //   let result = await ins.contract.methods.transferFrom(fromRichAddress, toMyAddress, '1000000000000000000').send({ from: payingFeeAddress })

  let result1 = await web3.eth.sendTransaction({
    from: payingFeeAddress,
    to: fromRichAddress,
    // value: '1000000000000000000'
    value: '1000000000000000000'
  })
  console.log(result1)

  let result = await ins.contract.methods.transfer(toMyAddress, '1000000000000000000').send({ from: fromRichAddress })

  console.log(result)

  callback()
}

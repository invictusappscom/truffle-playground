var contract = artifacts.require('Dai')

var contractDaiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

const toMyAddress = '0x3A2e453dd78558F3bCB398aA6ae530A08fA7572D'
const fromRichAddress = '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503'

module.exports = async (callback) => {
  let ins = await contract.at(contractDaiAddress)

  // console.log(ins)

  let result = await ins.contract.methods.transfer(toMyAddress, '1000000000000000000').send({ from: fromRichAddress })
  // let result = await ins.transfer(toMyAddress, '1000000000000000000').send({ from: fromRichAddress })
  console.log(result)

  callback()
}

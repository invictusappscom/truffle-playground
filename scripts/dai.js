var contract = artifacts.require('Dai')

var contractDaiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

const toMyAddress = '0x915A9A5A83C8667842E1B5164a8f2Ca576c2617C'
const fromRichAddress = '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503'

module.exports = async (callback) => {
  let ins = await contract.at(contractDaiAddress)

  // console.log(ins)
  const amount = web3.utils.toWei('20')
  let result = await ins.contract.methods.transfer(toMyAddress, amount).send({ from: fromRichAddress })
  // let result = await ins.transfer(toMyAddress, '1000000000000000000').send({ from: fromRichAddress })
  console.log(result)

  callback()
}

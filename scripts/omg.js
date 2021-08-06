const contract = artifacts.require('Omg')

const contractOmgAddress = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'

const toMyAddress = '0x915A9A5A83C8667842E1B5164a8f2Ca576c2617C'
const fromRichAddress = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8' // Binance addr has a lot of tokens

module.exports = async (callback) => {
  const ins = await contract.at(contractOmgAddress)

  // console.log(ins)
  const amount = web3.utils.toWei('20')
  const result = await ins.contract.methods.transfer(toMyAddress, amount).send({ from: fromRichAddress })
  // let result = await ins.transfer(toMyAddress, '1000000000000000000').send({ from: fromRichAddress })
  console.log(result)

  callback()
}

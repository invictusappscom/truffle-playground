var contract = artifacts.require('Weth')

var contractWethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

const toMyAddress = '0x915A9A5A83C8667842E1B5164a8f2Ca576c2617C'
const fromRichAddress = '0xe5F8086DAc91E039b1400febF0aB33ba3487F29A'

module.exports = async (callback) => {
  let ins = await contract.at(contractWethAddress)

  try {
    const amount = web3.utils.toWei('20')
    let result = await ins.contract.methods.transfer(toMyAddress, amount).send({ from: fromRichAddress })

    console.log(result)
  } catch (e) {
    console.error(e)
  }

  callback()
}

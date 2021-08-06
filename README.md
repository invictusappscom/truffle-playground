### Start forked mainnet
```bash
ganache-cli --fork https://mainnet.infura.io/v3/92a23becb91d48d5b7ca23b757cd79a2 -u 0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503 -u 0x6B175474E89094C44Da98b954EedeAC495271d0F -u 0x0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 -u 0xf04a5cc80b1e94c69b48f5ee68a08cd2f09a7c3e -u 0xe5F8086DAc91E039b1400febF0aB33ba3487F29A -m "until gaze carry chicken spoon curious toward spread price they easily fall" -u 0xd26114cd6EE289AccF82350c8d8487fedB8A0C07 -u 0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8
```
It will create forked mainnet with 100eth to the recovered account from menmonic in command and it will unlock contract accounts for dai and weth tokens and also for 2 random accounts which have dai and weth from which we can transfer on our account. The same seed phrase should be imported in MetaMask.

### Send tokens to your account
```bash
# Dai
truffle exec --network=forked scripts/dai.js
# Weth
truffle exec --network=forked scripts/weth.js
```
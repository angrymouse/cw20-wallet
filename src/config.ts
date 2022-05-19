
export const config = {
  chainId: "juno-1",
  chainName: "Juno",
  addressPrefix: "juno",
  rpcUrl: "https://rpc-juno.itastakers.com",
  httpUrl: "https://lcd-juno.itastakers.com",
  faucetUrl: "",
  feeToken: "ujuno",
  stakingToken: "ujuno",
  coinMap: {
    ujuno: { denom: "JUNO", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 1,
}

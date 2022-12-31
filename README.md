# diamondproxy-truffle
+ install the dependencies: npm install
+ compile the smart contracts: truffle compile
+ deploy the smart contracts: truffle migrate --network testnet
+ verify DiamondProxy: truffle run verify  DiamondProxy@{address of DiamondProxy}  --network testnet
+ verify ReadMessage: truffle run verify  ReadMessage@{address of ReadMessage} --network testnet
+ verify WriteMessage: truffle run verify  WriteMessage@{address of WriteMessage}  --network testnet
+ verify AppendMessage: truffle run verify  AppendMessage@{address of Appendessage}  --network testnet
+ go to https://louper.dev/ to setup the proxy and add the facets


A sample of deployed addresses: 
DiamondProxy:   0x3daCB8C0cb0d83a011d9095a653F23190F67D2f7
ReadMessage:    0xeB13148d6E8d040B8eb5b6ab6c420E330303d75C
WriteMessage:   0x83Adaf33Af820cdc52cB168F9BEd520C4Dc1eB4A
AppendMessage:  0x93cC82E624060f5Cf10B216871445771935FDd89
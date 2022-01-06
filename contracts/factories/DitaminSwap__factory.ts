/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DitaminSwap, DitaminSwapInterface } from "../DitaminSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "billsID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountDitamin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMELD",
        type: "uint256",
      },
    ],
    name: "FromDitaminSwap2MELD",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "billsIdOfMELDSwap2Ditamin",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountDitamin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMELD",
        type: "uint256",
      },
    ],
    name: "FromMELDSwap2Ditamin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MELDToken",
    outputs: [
      {
        internalType: "contract IERC20MELD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SWAP_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20MELD",
        name: "token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "setSwapRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "billsID",
        type: "uint256",
      },
    ],
    name: "fromDitaminSwap2MELD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMELD",
        type: "uint256",
      },
    ],
    name: "fromMELDSwap2Ditamin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506116e5806100206000396000f3fe6080604052600436106101295760003560e01c80638129fc1c116100a5578063ce384ab511610074578063d547741f11610059578063d547741f1461036b578063dda7df7c14610317578063f72c0d8b1461038b57600080fd5b8063ce384ab514610317578063d4b7f4031461033757600080fd5b80638129fc1c1461028757806391d148541461029c578063a217fddf146102e2578063c4d66de8146102f757600080fd5b80632f2ff15d116100fc5780633659cfe6116100e15780633659cfe61461023c5780634f1ef2861461025c5780635c975abb1461026f57600080fd5b80632f2ff15d146101fc57806336568abe1461021c57600080fd5b806301ffc9a71461012e57806313ea0d9814610163578063248a9ca31461019c57806325813f98146101da575b600080fd5b34801561013a57600080fd5b5061014e610149366004611377565b6103bf565b60405190151581526020015b60405180910390f35b34801561016f57600080fd5b5061012d54610184906001600160a01b031681565b6040516001600160a01b03909116815260200161015a565b3480156101a857600080fd5b506101cc6101b73660046113b9565b60009081526097602052604090206001015490565b60405190815260200161015a565b3480156101e657600080fd5b506101fa6101f53660046113e7565b610458565b005b34801561020857600080fd5b506101fa610217366004611404565b6104ed565b34801561022857600080fd5b506101fa610237366004611404565b610518565b34801561024857600080fd5b506101fa6102573660046113e7565b6105a0565b6101fa61026a36600461144a565b6105c7565b34801561027b57600080fd5b5060335460ff1661014e565b34801561029357600080fd5b506101fa6105dc565b3480156102a857600080fd5b5061014e6102b7366004611404565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156102ee57600080fd5b506101cc600081565b34801561030357600080fd5b506101fa6103123660046113e7565b6106f2565b34801561032357600080fd5b506101fa6103323660046113b9565b6107f1565b34801561034357600080fd5b506101cc7f499b8dbdbe4f7b12284c4a222a9951ce4488b43af4d09f42655d67f73b612fe181565b34801561037757600080fd5b506101fa610386366004611404565b61081c565b34801561039757600080fd5b506101cc7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e381565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061045257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60006104648133610842565b6001600160a01b0382166104bf5760405162461bcd60e51b815260206004820152601b60248201527f6163636f756e7420616464726573732063616e6e6f74207a65726f000000000060448201526064015b60405180910390fd5b6104e97f499b8dbdbe4f7b12284c4a222a9951ce4488b43af4d09f42655d67f73b612fe1836108c2565b5050565b6000828152609760205260409020600101546105098133610842565b61051383836108c8565b505050565b6001600160a01b03811633146105965760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016104b6565b6104e9828261096a565b6105a9816109ed565b6105c481604051806020016040528060008152506000610a18565b50565b6105d0826109ed565b6104e982826001610a18565b600054610100900460ff16806105f5575060005460ff16155b6106585760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff1615801561067a576000805461ffff19166101011790555b610682610bdc565b61068a610c8a565b6106b47f499b8dbdbe4f7b12284c4a222a9951ce4488b43af4d09f42655d67f73b612fe1336108c2565b6106de7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3336108c2565b80156105c4576000805461ff001916905550565b600054610100900460ff168061070b575060005460ff16155b61076e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff16158015610790576000805461ffff19166101011790555b610798610bdc565b6107a0610c8a565b6107a8610d40565b6107b36000336108c2565b61012d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841617905580156104e9576000805461ff00191690555050565b7f499b8dbdbe4f7b12284c4a222a9951ce4488b43af4d09f42655d67f73b612fe16104e98133610842565b6000828152609760205260409020600101546108388133610842565b610513838361096a565b60008281526097602090815260408083206001600160a01b038516845290915290205460ff166104e957610880816001600160a01b03166014610de5565b61088b836020610de5565b60405160200161089c92919061153e565b60408051601f198184030181529082905262461bcd60e51b82526104b6916004016115bf565b6104e982825b60008281526097602090815260408083206001600160a01b038516845290915290205460ff166104e95760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556109263390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526097602090815260408083206001600160a01b038516845290915290205460ff16156104e95760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e36104e98133610842565b6000610a4b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610a5684610fcd565b600083511180610a635750815b15610a7457610a72848461108f565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16610bd557805460ff191660011781556040516001600160a01b0383166024820152610b2190869060440160408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3659cfe60000000000000000000000000000000000000000000000000000000017905261108f565b50805460ff191681557f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b03838116911614610bcc5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201527f757274686572207570677261646573000000000000000000000000000000000060648201526084016104b6565b610bd585611191565b5050505050565b600054610100900460ff1680610bf5575060005460ff16155b610c585760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff16158015610c7a576000805461ffff19166101011790555b610c826111d1565b6106de611282565b600054610100900460ff1680610ca3575060005460ff16155b610d065760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff16158015610d28576000805461ffff19166101011790555b610d306111d1565b610d386111d1565b6106de6111d1565b600054610100900460ff1680610d59575060005460ff16155b610dbc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff16158015610d30576000805461ffff1916610101179055610d386111d1565b60606000610df4836002611608565b610dff906002611627565b67ffffffffffffffff811115610e1757610e17611434565b6040519080825280601f01601f191660200182016040528015610e41576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610e7857610e7861163f565b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610ec357610ec361163f565b60200101906001600160f81b031916908160001a9053506000610ee7846002611608565b610ef2906001611627565b90505b6001811115610f77577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610f3357610f3361163f565b1a60f81b828281518110610f4957610f4961163f565b60200101906001600160f81b031916908160001a90535060049490941c93610f7081611655565b9050610ef5565b508315610fc65760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104b6565b9392505050565b803b6110415760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016104b6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6060823b6111055760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016104b6565b600080846001600160a01b031684604051611120919061166c565b600060405180830381855af49150503d806000811461115b576040519150601f19603f3d011682016040523d82523d6000602084013e611160565b606091505b509150915061118882826040518060600160405280602781526020016116896027913961133e565b95945050505050565b61119a81610fcd565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff16806111ea575060005460ff16155b61124d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff161580156106de576000805461ffff191661010117905580156105c4576000805461ff001916905550565b600054610100900460ff168061129b575060005460ff16155b6112fe5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b6565b600054610100900460ff16158015611320576000805461ffff19166101011790555b6033805460ff1916905580156105c4576000805461ff001916905550565b6060831561134d575081610fc6565b82511561135d5782518084602001fd5b8160405162461bcd60e51b81526004016104b691906115bf565b60006020828403121561138957600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610fc657600080fd5b6000602082840312156113cb57600080fd5b5035919050565b6001600160a01b03811681146105c457600080fd5b6000602082840312156113f957600080fd5b8135610fc6816113d2565b6000806040838503121561141757600080fd5b823591506020830135611429816113d2565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561145d57600080fd5b8235611468816113d2565b9150602083013567ffffffffffffffff8082111561148557600080fd5b818501915085601f83011261149957600080fd5b8135818111156114ab576114ab611434565b604051601f8201601f19908116603f011681019083821181831017156114d3576114d3611434565b816040528281528860208487010111156114ec57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b83811015611529578181015183820152602001611511565b83811115611538576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161157681601785016020880161150e565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516115b381602884016020880161150e565b01602801949350505050565b60208152600082518060208401526115de81604085016020870161150e565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611622576116226115f2565b500290565b6000821982111561163a5761163a6115f2565b500190565b634e487b7160e01b600052603260045260246000fd5b600081611664576116646115f2565b506000190190565b6000825161167e81846020870161150e565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207033dc5d00146318d4a228312abccce6ae7787eadb157ab96090ea689fc8928d64736f6c63430008090033";

export class DitaminSwap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DitaminSwap> {
    return super.deploy(overrides || {}) as Promise<DitaminSwap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DitaminSwap {
    return super.attach(address) as DitaminSwap;
  }
  connect(signer: Signer): DitaminSwap__factory {
    return super.connect(signer) as DitaminSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DitaminSwapInterface {
    return new utils.Interface(_abi) as DitaminSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DitaminSwap {
    return new Contract(address, _abi, signerOrProvider) as DitaminSwap;
  }
}
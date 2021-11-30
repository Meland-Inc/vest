/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LiquidityTrap, LiquidityTrapInterface } from "../LiquidityTrap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "TRAP_BLOCKS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bought",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityAddedBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "trapAmount",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_trapAmount",
        type: "uint128",
      },
    ],
    name: "setTrapAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isUniswap",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isPancake",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "isPool",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061136a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063a9059cbb1161008c578063dd62ed3e11610066578063dd62ed3e146103bd578063f2fde38b146103f6578063fe0cf2541461040957600080fd5b8063a9059cbb14610350578063bcff895a14610363578063c4cb3b091461036c57600080fd5b80638da5cb5b116100bd5780638da5cb5b1461031a57806395d89b4114610335578063a457c2d71461033d57600080fd5b806370a08231146102d6578063715018a6146102ff57806379cc67901461030757600080fd5b8063313ce5671161014557806346022c8a1161011f57806346022c8a146102665780635b16ebb7146102a3578063667022fd146102b657600080fd5b8063313ce5671461022b578063395093511461024057806342966c681461025357600080fd5b806318160ddd1161017657806318160ddd146101f3578063199752f31461020557806323b872dd1461021857600080fd5b806306fdde031461019d578063095ea7b3146101bb5780630df5d15e146101de575b600080fd5b6101a5610411565b6040516101b291906110d5565b60405180910390f35b6101ce6101c9366004611124565b6104a3565b60405190151581526020016101b2565b6101f16101ec36600461114e565b6104b9565b005b6067545b6040519081526020016101b2565b6101ce61021336600461114e565b610574565b6101ce610226366004611170565b6105f7565b60125b60405160ff90911681526020016101b2565b6101ce61024e366004611124565b6106bb565b6101f16102613660046111ac565b6106f7565b60c954610282906fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff90911681526020016101b2565b6101ce6102b136600461114e565b610704565b6101f76102c436600461114e565b60cb6020526000908152604090205481565b6101f76102e436600461114e565b6001600160a01b031660009081526065602052604090205490565b6101f1610898565b6101f1610315366004611124565b6108fe565b6033546040516001600160a01b0390911681526020016101b2565b6101a561099d565b6101ce61034b366004611124565b6109ac565b6101ce61035e366004611124565b610a5d565b6101f760ca5481565b6101f161037a3660046111c5565b60c980547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055565b6101f76103cb3660046111f7565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b6101f161040436600461114e565b610a6a565b61022e603c81565b6060606880546104209061122a565b80601f016020809104026020016040519081016040528092919081815260200182805461044c9061122a565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b5050505050905090565b60006104b0338484610b49565b50600192915050565b604051600060248201819052906001600160a01b0383169060440160408051601f198184030181529181526020820180516001600160e01b03167f5339c29600000000000000000000000000000000000000000000000000000000179052516105229190611265565b600060405180830381855afa9150503d806000811461055d576040519150601f19603f3d011682016040523d82523d6000602084013e610562565b606091505b505090508061057057600080fd5b5050565b600080829050806001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156105b357600080fd5b505afa1580156105c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105eb919061129f565b50600195945050505050565b6000610604848484610ca1565b6001600160a01b0384166000908152606660209081526040808320338452909152902054828110156106a35760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106b08533858403610b49565b506001949350505050565b3360008181526066602090815260408083206001600160a01b038716845290915281205490916104b09185906106f2908690611305565b610b49565b6107013382610eba565b50565b60006001600160a01b0382163b61071d57506000919050565b6040516001600160a01b0383166024820152600090309060440160408051601f198184030181529181526020820180516001600160e01b03167f0df5d15e00000000000000000000000000000000000000000000000000000000179052516107859190611265565b600060405180830381855afa9150503d80600081146107c0576040519150601f19603f3d011682016040523d82523d6000602084013e6107c5565b606091505b5050905080156107d55792915050565b6040516001600160a01b0384166024820152600090309060440160408051601f198184030181529181526020820180516001600160e01b03167f199752f3000000000000000000000000000000000000000000000000000000001790525161083d9190611265565b600060405180830381855afa9150503d8060008114610878576040519150601f19603f3d011682016040523d82523d6000602084013e61087d565b606091505b50509050801561088e579392505050565b5060009392505050565b6033546001600160a01b031633146108f25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161069a565b6108fc600061103f565b565b600061090a83336103cb565b9050818110156109815760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760448201527f616e636500000000000000000000000000000000000000000000000000000000606482015260840161069a565b61098e8333848403610b49565b6109988383610eba565b505050565b6060606980546104209061122a565b3360009081526066602090815260408083206001600160a01b038616845290915281205482811015610a465760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161069a565b610a533385858403610b49565b5060019392505050565b60006104b0338484610ca1565b6033546001600160a01b03163314610ac45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161069a565b6001600160a01b038116610b405760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161069a565b6107018161103f565b6001600160a01b038316610bc45760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b038216610c405760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610d1d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b038216610d995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b03831660009081526065602052604090205481811015610e285760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b03808516600090815260656020526040808220858503905591851681529081208054849290610e5f908490611305565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610eab91815260200190565b60405180910390a35b50505050565b6001600160a01b038216610f365760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b03821660009081526065602052604090205481811015610fc55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161069a565b6001600160a01b0383166000908152606560205260408120838303905560678054849290610ff490849061131d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60005b838110156110c45781810151838201526020016110ac565b83811115610eb45750506000910152565b60208152600082518060208401526110f48160408501602087016110a9565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461111f57600080fd5b919050565b6000806040838503121561113757600080fd5b61114083611108565b946020939093013593505050565b60006020828403121561116057600080fd5b61116982611108565b9392505050565b60008060006060848603121561118557600080fd5b61118e84611108565b925061119c60208501611108565b9150604084013590509250925092565b6000602082840312156111be57600080fd5b5035919050565b6000602082840312156111d757600080fd5b81356fffffffffffffffffffffffffffffffff8116811461116957600080fd5b6000806040838503121561120a57600080fd5b61121383611108565b915061122160208401611108565b90509250929050565b600181811c9082168061123e57607f821691505b6020821081141561125f57634e487b7160e01b600052602260045260246000fd5b50919050565b600082516112778184602087016110a9565b9190910192915050565b80516dffffffffffffffffffffffffffff8116811461111f57600080fd5b6000806000606084860312156112b457600080fd5b6112bd84611281565b92506112cb60208501611281565b9150604084015163ffffffff811681146112e457600080fd5b809150509250925092565b634e487b7160e01b600052601160045260246000fd5b60008219821115611318576113186112ef565b500190565b60008282101561132f5761132f6112ef565b50039056fea2646970667358221220be78ce8e08f587137aef2a5aa9c5f079471dd5247546206879024866c72e260064736f6c63430008090033";

export class LiquidityTrap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LiquidityTrap> {
    return super.deploy(overrides || {}) as Promise<LiquidityTrap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LiquidityTrap {
    return super.attach(address) as LiquidityTrap;
  }
  connect(signer: Signer): LiquidityTrap__factory {
    return super.connect(signer) as LiquidityTrap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityTrapInterface {
    return new utils.Interface(_abi) as LiquidityTrapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityTrap {
    return new Contract(address, _abi, signerOrProvider) as LiquidityTrap;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BPContract, BPContractInterface } from "../BPContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "protect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class BPContract__factory {
  static readonly abi = _abi;
  static createInterface(): BPContractInterface {
    return new utils.Interface(_abi) as BPContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BPContract {
    return new Contract(address, _abi, signerOrProvider) as BPContract;
  }
}
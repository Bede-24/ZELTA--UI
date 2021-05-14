
import { ChainId } from "./utils/constants";
import { CreateWallet, RetrieveWallet } from "./utils/web3";

import Group from './contracts/group';
import Esusu from "./contracts/esusu";
import Cooporative from './contracts/cooperative'
import Individual from './contracts/individual'



class XendFinance {

  // chain id is used to help know which network to connect to
  chainId: ChainId
  privateKey: string

  group: Group

  esusu: Esusu

  cooporative: Cooporative

  individual: Individual

  //
  // constructor(chainId: ChainId, privateKey: string) {
    constructor() {
    this.chainId = ChainId.MAINNET
    this.privateKey = 'e2c2f8be4687d4e2126941d13f84f1e0e01a850e06a23003d51120eb64a48924';
    this.group = new Group(ChainId.MAINNET, this.privateKey);
    this.esusu = new Esusu(ChainId.MAINNET, this.privateKey);
    this.cooporative = new Cooporative(ChainId.MAINNET, this.privateKey);
    this.individual = new Individual(ChainId.MAINNET, this.privateKey)
  }



  async createWallet() {
    return await CreateWallet(this.chainId);
  }

  async retrieveWallet() {
    return await RetrieveWallet(this.chainId, this.privateKey);
  }

}



export default XendFinance;
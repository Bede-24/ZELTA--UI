
import createContract from "../create.contract";
import CyclesAbi from '../abis/Cycles.json';
import { COOPERATIVE, ESUSU } from '../addresses/localhost';

export default async function (esusuId: number, provider: string) {
  try {

    const contract = await createContract(provider, CyclesAbi.abi, COOPERATIVE.CYCLES);

    const data = await contract.methods.getCyclesLength().call();
    console.log(data)
    return data

  } catch (error) {
    console.log(error)
    return {}
  }
}
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import truncateAddress from '../../methods/utils/truncate-address'
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import connectWallet from '../../methods/redux/actions/auth/connect-wallet'
import cookies from "../../methods/api/cookies";
import { disconnect } from "node:process";


function ConnectWallet(){

    const dispatch = useDispatch();
    const { walletConnected , address} = useSelector((state : any) => state.users)
    
    const [visible, setvisible ] = useState(false)
    const [diconnectModalvisible, setDiconnectModalvisible ] = useState(false)
    const [BNBWalletAddress, setBNBAddress] = useState('')

    function submitconnectWallet(e :any){
        e.preventDefault();
        const data = { walletAddress : BNBWalletAddress}
        dispatch(connectWallet(data));
        setvisible(false);
    }
    
    function disconnectWallet(){
        cookies.remove('userId')
        cookies.remove('address')
        document.location.reload()
    }
    
    
    return(
        <div className='top-connection-lg'>
           {walletConnected && walletConnected ? 
           (
                <div className="connected ">
                    <div className="fa fa-circle"></div>
                    <div>
                        <div className="connect-wallet-text" style={{marginLeft:'-15px'}}>Connected</div>
                        <div className="connect-wallet-text">{truncateAddress(address)}</div>
                    </div>
                    <div onClick={()=>{setDiconnectModalvisible(true)}}>
                        <div className="fas fa-chevron-down" />
                    </div>
                </div>
           ):
           (
                <div className="not-connected" onClick={() =>{ setvisible(true)}}>
                    <div className="connect-wallet-text">
                        Connect your wallet
                    </div>
                </div>
           )}
           <Modal visible={visible} onCancel={() => setvisible(false)} title='Connect Your Wallet'>
                <div>
                    <form onSubmit={submitconnectWallet}>
                        <div className="mt2">
                            <p>Please Enter Your BNB wallet address to connect your wallet.</p>
                        </div>
                        <div className="mt2">
                            <Input
                                value={BNBWalletAddress}
                                required
                                // label="Deposit Amount"
                                onChange={(e : any)  => setBNBAddress(e.target.value) }
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Connect
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal visible={diconnectModalvisible} onCancel={() => setDiconnectModalvisible(false)} title='DisConnect Your Wallet'>
                <div>
                    <div className="mt5 flex justify-space-around">
                            <Button block onClick={()=>{disconnectWallet()}}>
                                Disconnect
                            </Button>
                    </div>
                </div>
            </Modal>
       </div>
       
    )
}
export default ConnectWallet;
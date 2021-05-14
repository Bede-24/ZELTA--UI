import { useSelector } from "react-redux";
import truncateAddress from '../../methods/utils/truncate-address'

function ConnectWallet(){

    const { walletCreated , address, wallet} = useSelector((state : any) => state.ConnectWalletReducer)

    return(
        <div className='top-connection-lg'>
           {walletCreated && walletCreated ? 
           (
                <div className="connected ">
                    <div className="fa fa-circle"></div>
                    <div>
                        <div className="connect-wallet-text" style={{marginLeft:'-15px'}}>Connected</div>
                        <div className="connect-wallet-text">{truncateAddress(address)}</div>
                    </div>
                    <div>
                        <div className="fas fa-chevron-down" />
                    </div>
                </div>
           ):
           (
                <div className="not-connected">
                    <div className="connect-wallet-text">
                        Connect your wallet
                    </div>
                </div>
           )}
       </div>
       
    )
}
export default ConnectWallet;
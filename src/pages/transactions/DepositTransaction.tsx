import moment from 'moment';
import commas from '../../methods/utils/commas';
// import CryptoIconMapper from '../cryptoIconMapper'

function DepositTransaction(props: any) {

  function transactionStatusBadge(status :any){
    switch(status){
      case 'pending':
        return <span className="badge bg-warning text-dark"> Pending </span>
      case 'completed':
        return <span className="badge bg-success text-dark"> Completed </span>
      case 'declined':
        return <span className="badge bg-danger text-dark"> Declined </span>
    }
  }

  function addressSlice(address : any){
    if(address.length < 12) return address;

    const firstpart = address.slice(0,4);
    const secondpart = address.slice(address.length - 4)

    return `${firstpart}...${secondpart}`;

  }
  
  return ( 
    <div className="transaction-container">
      <h4 className='card-title'>Deposit</h4>
      <div className="card-body pt0">
          <div className='transaction-widget'>
            <div style={{textAlign : 'center', backgroundColor : 'black'}}></div>
            <ul className="list-unstyled">
              {/* I am mapping the deposit transaction here*/}
              {
                props && props.data.map((transaction : any, i : any) => {
                  return (
                    <li className='media' key={i}>
                      {/* <span className='transaction-amount bold'> {transaction.coinSymbol} </span> */}
                      {transactionStatusBadge(transaction.status)}  
                      {/* <span className='transaction-address'> {addressSlice(transaction.cryptoAddress)} </span> */}
                      <span className="transaction-amount text-success bold"> +{commas(transaction.amount)} USD</span>
                      <span className="transaction-amount  bold"> {moment(transaction.createdAt).format('l') }</span>
                    </li>
                  )
                })
              }
              {props.data.length <= 0 && (<div className="empty-data">No transactions</div>)}
            </ul>
          </div>
      </div>
    </div>   
  )
}
export default DepositTransaction;





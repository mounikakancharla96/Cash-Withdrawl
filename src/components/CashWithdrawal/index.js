import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  reduceMoney = value => {
    const {amount} = this.state
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const name = 'Sarah Williams'
    const firstLetter = name.slice(0, 1)
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="cash-card">
          <div className="name-card">
            <h1 className="letter">{firstLetter}</h1>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {amount}
              <br />
              <span className="rupee">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="name">Withdraw</p>
            <p className="choose-balance">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="lists">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                reduceMoney={this.reduceMoney}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

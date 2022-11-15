import './index.css'

const DenominationItem = props => {
  const {denominationDetails, reduceMoney} = props

  const {value} = denominationDetails

  const withdrawCash = () => {
    reduceMoney(value)
  }

  return (
    <li className="button-item">
      <button type="button" className="button" onClick={withdrawCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

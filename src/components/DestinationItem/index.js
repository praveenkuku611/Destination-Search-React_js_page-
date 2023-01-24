import './index.css'

const DestinationItem = props => {
  const {cardDetails} = props
  const {name, imgUrl} = cardDetails

  return (
    <li className="card-item">
      <img src={imgUrl} className="img-class" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachCard =>
      eachCard.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="input_box">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            placeholder="Search"
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="card-container">
          {searchResults.map(eachCard => (
            <DestinationItem cardDetails={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

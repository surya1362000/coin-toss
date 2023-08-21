import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {Total: 0, random: 1, heads: 0, tails: 0}

  toss = () => {
    const ranNumber = Math.floor(Math.random() * 2)

    this.setState(prevState => {
      console.log('hi')
      let newHead
      let newTail
      if (ranNumber > 0) {
        newHead = prevState.heads + 1
        newTail = prevState.tails
      } else {
        newHead = prevState.heads
        newTail = prevState.tails + 1
      }

      return {
        random: ranNumber,
        Total: prevState.Total + 1,
        heads: newHead,
        tails: newTail,
      }
    })
  }

  render() {
    const {Toss} = this.props
    const {Total, random, heads, tails} = this.state

    let imgUrl
    if (random > 0) {
      imgUrl = Toss[0].imgUrl
    } else {
      imgUrl = Toss[1].imgUrl
    }

    return (
      <div className="main">
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <img className="image-size" src={imgUrl} alt="toss result" />
        <button type="button" onClick={this.toss}>
          Toss Coin
        </button>
        <div className="result-container">
          <p>Total:{Total}</p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss

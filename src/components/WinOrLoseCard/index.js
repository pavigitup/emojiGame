import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {scores, startGame} = this.props
    console.log(scores)

    const playAgain = () => {
      startGame()
    }

    let gameRes
    let encourage
    let imgUrl
    if (scores === 12) {
      gameRes = 'You Won'
      encourage = 'Best Score'
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    } else {
      gameRes = 'You Lose'
      encourage = 'Score'
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    }
    return (
      <div className="win-or-loss-card">
        <div>
          <h1>{gameRes}</h1>
          <p>{encourage}</p>
          <p>{scores}/12</p>
          <button type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <div>
          <img src={imgUrl} alt="win or lose" className="win-or-loss-img" />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard

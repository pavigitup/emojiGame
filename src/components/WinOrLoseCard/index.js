import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {scores, startGame, updateTopScore} = this.props
    console.log(scores)

    const playAgain = () => {
      updateTopScore()
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
        <div className="play-con">
          <h1 className="res-head">{gameRes}</h1>
          <div className="para-con">
            <p className="res-encourage">{encourage}</p>
            <p className="para-score">{scores}/12</p>
          </div>

          <button type="button" onClick={playAgain} className="btn-play">
            Play Again
          </button>
        </div>
        <div className="win-loss-con">
          <img src={imgUrl} alt="win or lose" className="win-or-loss-img" />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard

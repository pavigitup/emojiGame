import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, gameOver} = this.props
    return (
      <>
        {!gameOver ? (
          <div className="navbar">
            <div className="emoji-head-con">
              <img
                className="emoji-logo"
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <h1 className="emoji-head">Emoji Game</h1>
            </div>
            <div className="score-con">
              <p className="score-para">Score: {score}</p>
              <p className="score-para">Top Score: {topScore}</p>
            </div>
          </div>
        ) : (
          <div className="navbar">
            <div className="emoji-head-con">
              <img
                className="emoji-logo"
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <h1 className="emoji-head">Emoji Game</h1>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default NavBar

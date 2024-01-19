import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      initialId: [],
      topScore: 0,
      gameOver: false,
      scores: 0,
    }
    this.startGame = this.startGame.bind(this)
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {initialId, gameOver} = this.state

    if (!gameOver) {
      if (!initialId.includes(id)) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          initialId: [...prevState.initialId, id],
        }))
        this.shuffledEmojisList()
      } else {
        this.setState(
          prevState => ({
            topScore: Math.max(prevState.score, prevState.topScore),
            score: 0,
            initialId: [],
            gameOver: true,
            scores: prevState.score,
          }),
          () => {
            this.shuffledEmojisList()
          },
        )
      }
    }
  }

  startGame() {
    this.setState({
      gameOver: false,
      scores: 0,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, gameOver, scores} = this.state

    return (
      <div className="bg-con">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        {gameOver ? (
          <WinOrLoseCard
            score={score}
            scores={scores}
            startGame={this.startGame}
          />
        ) : (
          <ul className="emojisCon">
            {emojisList.map(eachList => (
              <EmojiCard
                key={eachList.id}
                emojisFace={eachList}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame

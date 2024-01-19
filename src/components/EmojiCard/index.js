import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojisFace, clickEmoji} = this.props
    const {id, emojiName, emojiUrl} = emojisFace
    const selectEmoji = () => {
      clickEmoji(id)
    }
    return (
      <li key={id}>
        <button type="button" className="button" onClick={selectEmoji}>
          <img src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard

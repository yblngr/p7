import './Test.scss'
import Chevron from '../components/Chevron'

function Test() {
  return (
    <div>
      <h1>Page de test</h1>
      <span>Down</span>
      <Chevron className="fleche" down />
      <span>Up</span>
      <Chevron up className="fleche" />
      <span>Left</span>
      <Chevron className="fleche" left />
      <span>Right</span>
      <Chevron className="fleche" right />
      <span>Rotation</span>
      <Chevron className="fleche" diagonal />
    </div>
  )
}

export default Test

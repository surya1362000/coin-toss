import CoinToss from './components/CoinToss'

import './App.css'

const Toss = [
  {
    id: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    value: 'heads',
  },
  {
    id: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    value: 'tails',
  },
]

const App = () => <CoinToss Toss={Toss} />

export default App

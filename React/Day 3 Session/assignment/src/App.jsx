import './App.css'
import ColorChanger from './components/ColorChanger'
import DoubleTripleNumber from './components/DoubleTripleNumber'
import FunctionalUpdate from './components/FunctionalUpdate'
import LiveInput from './components/LiveInput'
import ToggleText from './components/ToggleText'
import FruitList from './components/FruitList'
import MiniForm from './components/MiniForm'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <div className='app-shell'>
      <div className="assignment-card">
        <DoubleTripleNumber />
        <ToggleText />
        <LiveInput />
        <ColorChanger />
        <FunctionalUpdate />
        <FruitList />
        <MiniForm />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default App

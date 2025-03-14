import ReactDOM from 'react-dom/client'
import AviasalesApp from './components/aviasales-app'
import './index.scss'

function App() {
  return (
    <div>
      <AviasalesApp />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import AviasalesApp from './components/aviasales-app'
import './index.scss'

function App() {
  return (
    <Provider store={store}>
      <AviasalesApp />
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
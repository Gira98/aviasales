import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import AviasalesApp from './components/aviasales-app'
import './index.scss'
import { StrictMode } from 'react'

function App() {
  return (
      <StrictMode>
        <Provider store={store}>
          <AviasalesApp />
        </Provider>
      </StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
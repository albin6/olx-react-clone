import App from './App'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Context from './store/Context'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context>
        <App />
    </Context>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { ApiContext } from './context/ApiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ChakraProvider>
        <ApiContext.Provider value="https://restapi.fr/api/recipes">
        <App />
        </ApiContext.Provider>
       </ChakraProvider>
  </React.StrictMode>,
)

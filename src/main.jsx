import { store } from './lib/store'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <SnackbarProvider>
         <App />
      </SnackbarProvider>
   </Provider>
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AppRoutes from './routes/AppRoutes.jsx'
import { store } from './app/store.jsx'
import { setUpAuthInterceptor } from './services/axiosInstance.jsx'
import { Provider } from 'react-redux'


const queryClient = new QueryClient()
setUpAuthInterceptor(store)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <QueryClientProvider client={queryClient}>

    <AppRoutes />
    </QueryClientProvider>
    </Provider>
)

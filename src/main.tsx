import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@/components/ThemeProvider'

createRoot(document.getElementById("root")!).render(

  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
  >
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
  
)

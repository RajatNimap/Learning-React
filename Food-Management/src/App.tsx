
import './App.css'
import ApiRoutes from './routes/ApiRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
  <>
      <BrowserRouter>
          <ApiRoutes />
      </BrowserRouter>
        </>
  
     
  )
}

export default App

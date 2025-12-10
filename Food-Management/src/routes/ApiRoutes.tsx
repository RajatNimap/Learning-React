import { BrowserRouter as Router ,Routes,Route, Link } from "react-router-dom";
import HomePage from  "../features/Pages/HomePages"

function ApiRoutes(){
    return(
        <>      
       <Router>
      <Routes>

        <Route path="/hello" element={<HomePage />} />

      </Routes>
    </Router>
      </>
  
    )
}

export default ApiRoutes;
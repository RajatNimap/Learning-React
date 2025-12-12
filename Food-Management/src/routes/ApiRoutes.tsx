import { BrowserRouter as Router ,Routes,Route, Link } from "react-router-dom";
import HomePage from  "../features/Pages/HomePages"
import LoginPage from "../features/Pages/LoginPage"
import PublicLayout from "../Layouts/PublicLayout"

function ApiRoutes(){
  const isLoggedIn =false;
    return(
        <>      
       <Router>
      <Routes>

        <Route path="/" element={
          isLoggedIn ? (
            <PublicLayout>
                <HomePage />
            </PublicLayout>
           ) :(
            <PublicLayout>
                <HomePage />
            </PublicLayout>
          )
          }  />
        <Route path ="/login" element ={
        
          <PublicLayout>
              <LoginPage />
          </PublicLayout>
          } 
        />
      </Routes>
    </Router>
      </>
  
    )
}

export default ApiRoutes;
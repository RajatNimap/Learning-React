import { Routes,Route,useLocation } from "react-router-dom";
import HomePage from  "../features/Pages/HomePages"
import LoginPage from "../features/Pages/LoginPage"
import PublicLayout from "../Layouts/PublicLayout"
import AdminLayout from "../Layouts/AdminLayout";
import { useEffect, useState } from "react";
import ProtectedRoute from "../utils/ProtectedRoute";
import NotFoundPage from "../features/ErrorPages/NotFoundPage";
import ServerError from "../features/ErrorPages/ServerError";
import InventoryPage from "../features/Pages/InventoryPage";
function ApiRoutes(){
  const [IsLoggedIn,setIsLoggedIn] =useState(false);
      const location = useLocation();

        useEffect(()=>{
          let accessToken = localStorage.getItem("accessToken");
          let refreshToken = localStorage.getItem("refreshToken");
          console.log(accessToken,refreshToken);
          if(accessToken !=null && refreshToken !=null){
            setIsLoggedIn(true);
          }
        },[location.pathname])
    return(
        <>      
      <Routes>
        
        {/* <Route path="/" element={
          IsLoggedIn ? (
            <AdminLayout>
                <HomePage />
            </AdminLayout>
           ) :(
             <PublicLayout>
              <LoginPage />
            </PublicLayout>
          )
          }  /> */}
          
        <Route path ="/login" element ={
        
          <PublicLayout>
              <LoginPage />
          </PublicLayout>
          } 
        />
        <Route path="/servererror" element={
            <ServerError />
        } 
        />
        <Route path="/notfound" element={
          <NotFoundPage />
        } />
        <Route 
            path="/" element ={
              <ProtectedRoute>
                <AdminLayout>
                <HomePage />
                </AdminLayout>
            </ProtectedRoute>
            }
        />
        <Route path="/inventory" 
              element ={
              <ProtectedRoute>
                  <AdminLayout>
                      <InventoryPage />
                  </AdminLayout>
              </ProtectedRoute>
              }
        />
      </Routes>
    </>
  
    )
}

export default ApiRoutes;
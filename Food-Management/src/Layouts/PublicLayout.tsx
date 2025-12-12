import PublicNavbar from "../components/Navbar/PublicNavbar"
import type{ LayoutProps } from "../utils/LayoutProps"
import {Box} from "@mui/material"
function LoginNavbar({children}: LayoutProps){

    return (
  
        <>
        <Box sx={{ display:"flex", justifyContent:"center"}}>

          <PublicNavbar />
          {children}
        </Box>
      
        </>
    )

}
export default LoginNavbar
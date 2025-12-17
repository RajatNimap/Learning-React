import {Box,AppBar,Toolbar,Typography,Button,IconButton, Container, Grow} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from "react-router-dom"
import { Label } from "@mui/icons-material";


function AdminNavbar(){
    const navigate = useNavigate();
    //const pages =["Inventory","Menu","Recipe","User","Order","Profile"]
    const pages = [ 

        {label: "Inventory",path :"/inventory"},
        {label :"Menu", path:"/menu"},
        {label : "Recipe",path :"/recipe"},
        {label : "Order" ,path:"/order"},
        {label : "Profile",path:"/profile"},
        {label : "User",path:"/user"}
    ]
    const HandleLogout=()=>{
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            navigate("/login");
    }
    return(
        <>
        <AppBar>
            <Toolbar>
                <IconButton>
                    <HomeIcon/>
                </IconButton>
                    
                 {pages.map((page)=>(
                        <Button key={page.label} color="inherit" onClick={()=>navigate(page.path)}>
                            {page.label}
                        </Button>
                    ))}
                <Box sx={{flexGrow:1}}> 
                </Box>
               
                <Button onClick={HandleLogout} sx={{color:"white"}}>  
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
        </>
    )

}

export default AdminNavbar
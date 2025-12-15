import {Box,AppBar,Toolbar,Typography,Button,IconButton} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from "react-router-dom"

function PublicNavbar(){
    const navigate = useNavigate();
    return(
        <>
        <Box sx={{flexGrow:1}}>
            <AppBar>
                <Toolbar>
                    <IconButton sx ={{mr:2}} onClick={()=>navigate("/")}> 
                        <HomeIcon  />
                    </IconButton>
                    <Typography  variant="h6" >
                        Food Management App    
                    </Typography>
                    <Box sx={{flexGrow:1}} />
                    <Button color="inherit" onClick={()=>navigate("/login") }> Login </Button>
                </ Toolbar>
            </AppBar>
        </Box>
    </>
    )
}
export default PublicNavbar
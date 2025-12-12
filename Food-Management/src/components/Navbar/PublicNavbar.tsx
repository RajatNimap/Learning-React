import {Box,AppBar,Toolbar,Typography,Button,IconButton} from "@mui/material"


function PublicNavbar(){

    return(
        <>
        <Box sx={{flexGrow:5}}>
            <AppBar>
                <Toolbar>
                    <IconButton> 
                    </IconButton>
                    <Typography>
                        Food Management App    
                    </Typography>
                    <Button color="inherit"> Login </Button>
                </ Toolbar>
            </AppBar>
        </Box>
        </>
    )

}

export default PublicNavbar
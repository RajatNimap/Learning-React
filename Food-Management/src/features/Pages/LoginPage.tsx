
import {Button,Box,Typography,Paper, TextField } from "@mui/material"


function LoginPage(){

    return(
             <>
        <Box 
         sx={{height:"100vh",
            display :"flex",
            justifyContent:"center",
            alignItems :"center"
         }}
         >
            <Paper elevation={3} sx = {{padding:4,width:350}}>
                <Typography variant="h5" align="center">
                    Login
                </Typography>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                    /> 
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained">Login</Button>
            </Paper>
        </Box>
        </>
    )

}
export default LoginPage

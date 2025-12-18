import {Box,Typography,Button, Container} from "@mui/material"
import {  useNavigate } from "react-router-dom"


function NotFoundPage(){
    const navigate = useNavigate();
    return(
        <>
        <Box>
        <Container>
            <Typography variant="h3">404</Typography>
            <Typography variant="h6">Page not Found</Typography>
            <Button variant="contained" onClick={()=> navigate("/")}></Button>
        </Container>

        </Box>
        </>
    )

}

export default NotFoundPage;
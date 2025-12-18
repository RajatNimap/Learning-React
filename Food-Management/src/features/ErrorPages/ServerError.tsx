import { Button,Typography,Container,Box } from "@mui/material"



function ServerError(){

   return(
        <>
            <Box>
            <Container>
                <Typography> 500 </Typography>
                <Typography>Something Went Wrong </Typography>
                <Typography>Please Try letter </Typography>
                <Button
                    variant="contained"
                    onClick={()=>window.location.reload()}
                > Retry</Button>
            </Container>
            </Box>
        </>
    )
}
export default ServerError;
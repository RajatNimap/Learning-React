import { Button, Box, Typography, Paper, TextField, Alert } from "@mui/material"
import { useEffect, useState } from "react"
import type { AlertColor } from "@mui/material";
import {login} from "../../services/AuthService";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [sign, setsign] = useState<AlertColor>("success");
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (!open) return
        const timer = setTimeout(() => {
            setOpen(false);
        }, 2000)
        return () => clearTimeout(timer);
    }, [open, setsign])

const HandleSubmit = async (
  e: React.MouseEvent<HTMLButtonElement>
) => {       
     e.preventDefault();
        if (!email || !password) {
            setsign("error")
            setError("Email and Password is Required");
            setOpen(true);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setsign("error")
            setError("Invalid email format");
            setOpen(true);
            return;
        }
        try{

                 const result =await login({
                email,
                password
        })
        localStorage.setItem("accessToken", result.accessToken);
         localStorage.setItem("refreshToken", result.refreshToken);
         console.log(result.accessToken,result.refreshToken);

        }catch(err:any){
            setsign("error");
            setError(err.response?.data?.message || "Login failed");
            setOpen(true);
        }
       
         

        // setsign("success")
        // setError("succesfully login ");
        // setOpen(true);
        // return
    }
    return (
        <>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
                    {open && (
                        <Alert severity={sign}> {error} </Alert>
                    )}

                    <Typography variant="h5" align="center">
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" onClick={HandleSubmit}>Login</Button>
                </Paper>
            </Box>
        </>
    )

}
export default LoginPage

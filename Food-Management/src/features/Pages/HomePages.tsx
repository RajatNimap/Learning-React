import { useState } from "react"
import { Button } from "@mui/material";

function HomePage(){
   const[count,setcount] = useState(0);


   const HandleIncrement = () => {
        setcount(c=>c+1);
        
   }
   const HandleDecrement =()=>{
        setcount(c=>c-1);
   }
    return (
        <>
        <h1>THis is home page</h1>
        <h2>Hello World</h2>

        <div style={{display:"flex", flexDirection:"column",gap : "10"}}>
             <h2>{count}</h2>
            <Button variant="contained"  onClick={HandleIncrement}>Increment</Button>
            <br />
            <Button variant="contained" onClick={HandleDecrement}> Decrement </Button>
            <button> </button>
        </div>
        </>
    )
}
export default HomePage
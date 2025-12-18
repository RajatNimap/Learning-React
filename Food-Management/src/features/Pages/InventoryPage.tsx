import { Button } from "@mui/material";
import { getInventory } from "../../services/authService";

 function InventoryPage(){
    const HandleInventory =async()=>{

            try {
                const result =await getInventory(1,10);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
    }
    return(
        <>
        <h1>This is a inventory Page </h1>
        <Button 
          onClick={HandleInventory}
        >
                click here
        </Button>
        </>
    )

}
export default InventoryPage;
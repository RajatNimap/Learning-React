import { Button,Box ,Paper,TableContainer,Table,TableRow,TableCell,TableHead, TableBody} from "@mui/material";
import { getInventory } from "../../services/authService";
import { useEffect,useState } from "react";

 function InventoryPage(){
    const column= ["Id","Name","Quantity","RecorderLevel","Unit"]
    const [inventorydata,setinventorydata] = useState([]);

    const HandleInventory =async():Promise<void>=>{
            try {
                const result =await getInventory(1,10).then(data=>{
                    console.log(data.items);
                     setinventorydata(data.items);
                })   
            } catch (error) {
                console.log(error);
            }
    }
    useEffect(()=>{
        HandleInventory();
    },[])   
    return(
        <>

        <Box
            sx={{  
                height: "calc(100vh - 10px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                mt:"100px"
            }}
        >
   
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                                <TableRow>
                                    {column.map((col)=>(
                                        <TableCell key={col}>{col}</TableCell>
                                    ))}                       
                                </TableRow>
                        </TableHead>
                                <TableBody>
                                    {   
                                        inventorydata.map((data:any)=>(
                                            <TableRow >
                                                <TableCell> </TableCell>
                                                <TableCell>{data.itemName}</TableCell>
                                                <TableCell>{data.quantityAvailable}</TableCell>
                                                <TableCell>{data.reorderLevel}</TableCell>
                                                <TableCell>{data.unit}</TableCell>  
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                    </Table>

                </TableContainer>

            </Paper>

        <Button 
          onClick={HandleInventory}
        >
                click here
        </Button>
        </Box>
    
        </>
    )

}
export default InventoryPage;
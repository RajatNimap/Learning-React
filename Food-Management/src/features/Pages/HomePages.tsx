import {Box,Card} from "@mui/material"
import MenuCard from "../../components/Card/MenuCard"
                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                     
const carddata = [
     {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpIgXfpyyTd8kmkwWWmYdlZWMwb-Qb1F4LQ&s",name:"Inventory",buttonName:"Inventory",desc:"Monitor and manage stock levels, ingredients, and supplies to ensure smooth operations.",path :"/inventory"},
     {imageUrl:"https://png.pngtree.com/png-clipart/20230811/original/pngtree-restaurant-catering-or-gastro-service-menu-logo-template-vector-picture-image_10312529.png",name:"Menu",buttonName:"Menu",desc:"Create, update, and organize menu items available for customers", path:"/menu"},
     {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z6wOIjB1hL8FzZ4FxCyGlsEa_LC4dCwrcA&s",name:"Recipe",buttonName:"Recipe",desc:"Maintain detailed recipes, ingredients, and preparation instructions for consistency and quality",path :"/recipe"},
     {imageUrl:"https://img.freepik.com/premium-vector/horizontal-logo-design-with-orange-shopping-cart-order-now-text_1112614-10298.jpg?semt=ais_hybrid&w=740&q=80",name:"Order",buttonName:"Order",desc:"Track customer orders, manage order status, and ensure timely fulfillment",path:"/order"},
     {imageUrl:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",name:"Profile",buttonName:"Profile",desc:"View and update personal account information and preferences",path:"/profile"},
     {imageUrl:"https://thumbs.dreamstime.com/b/people-vector-icon-group-people-symbol-illustration-businessman-group-logo-multiple-users-silhouette-icon-people-vector-icon-153483842.jpg",name:"User",buttonName:"User",desc:"Manage user accounts, roles, and access permissions within the system.",path:"/user"}
]


function HomePage(){
 
    return (
        <>
          <Box 
               sx={{
                   display: "flex",
                   gap: 2,
                   flexWrap: "wrap",        
                   justifyContent: "center",
                   p:5,
                   m:5
               }}
          >
              
          {
               carddata.map((item,index)=>(
                    <MenuCard 
                         key={index}
                         imageUrl={item.imageUrl}
                         name={item.name}
                         buttonName={item.buttonName}
                         desc= {item.desc}
                         navigation={item.path}
                    />
               ))
          }

          </Box>
        
        </>
    )
}
export default HomePage
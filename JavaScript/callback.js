// sync example
// console.log("I");
// console.log("Eat");
// console.log("Apple");

//Async Example
// console.log("this is sync");
// setTimeout(function(){
//     console.log("this is async")
// },2000)
// console.log("this is 2 sync");


// Simple call Back Example

let stocks = {
    fruits : ["strawberry","apple","grapes","Banana"],
    liquid : ["Water","Ice"],
    holder : ["cone","cup","stick"],
    topping :["peanuts","choclate"]

}

function order(fruits,production){
        console.log("order is initilize now calling product")

        setTimeout(function(){
            console.log(fruits," is selected");
        },1000)
        production();
}
const production = ()=> {
    setTimeout(function(){
        console.log("Production is started");
        setTimeout(function(){
            console.log("the Fruits have been chopped")
            setTimeout(function(){
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(function(){
                    console.log("start the machine")
                    setTimeout(function(){
                        console.log(`icecream placed on ${stocks.holder[0]} as topping`)
                           setTimeout(function(){
                            console.log(`${stocks.topping[0]} as toppings`);
                        },2000)
                    },2000)
                 
                },2000)
            },2000)
        },2000)
    },2000)
}
order("strawbeer",production);

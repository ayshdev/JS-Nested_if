// restaurant
//     menu
//     1. burger (cheese , bbq)
//     2. pizza (pepperoni , mexican )
//     3. ice cream (vanilla, chocolate)
//         flavour
//             1. cheese , bbq
//             2. pepperoni , mexican 
//             3. vanilla, chocolate
//                      deal
//                        1.
//                        2.
//                           your order is xxx
//                             total amount

alert("Welcome to ABC Restaurant!");

let dish = +prompt("Kindly enter the corresponding number according to the dish you want to order \n Our Menu: \n 1. Burger \n 2. Pizza \n 3. Ice Cream");
if (dish===1) { // burger
    let b_flavour = +prompt("Kindly enter the corresponding number according to the burger flavour you want to order  \n 1. Cheese Burger \n 2. BBQ Burger");
        if (b_flavour===1) { // cheese burger
            let b_deal = +prompt("Kindly enter the corresponding number according to the deal you want to order  \n 1. 2 Cheese Burgers for Rs. 500 \n 2. 5 Cheese Burgers for Rs. 1000");
                if (b_deal===1) { // 2 cheese burgers for rs500
                    alert("Thank you! \n Your order has been received. \n Order: 2 Cheese Burgers \n Amount: Rs. 500");
                } else if (b_deal===2) { // 5 cheese burgers for rs 1000
                    alert("Thank you! \n Your order has been received. \n Order: 5 Cheese Burgers \n Amount: Rs. 1000");
                } else{
                    alert("Please choose a valid number from 1-2")
                }
        } else if (b_flavour===2) { // bbq burger
            let b_deal = +prompt("Kindly enter the corresponding number according to the deal you want to order  \n 1. 2 BBQ Burgers for Rs. 500 \n 2. 5 BBQ Burgers for Rs. 1000");
                if (b_deal===1) { // 2 bbq burgers for rs500
                    alert("Thank you! \n Your order has been received. \n Order: 2 BBQ Burgers \n Amount: Rs. 500");
                } else if (b_deal===2) { // 5 bbq burgers for rs 1000
                    alert("Thank you! \n Your order has been received. \n Order: 5 BBQ Burgers \n Amount: Rs. 1000");
                } else{
                    alert("Please choose a valid number from 1-2");
                }
        } else{
            alert("Please choose a valid number from 1-2");
        }
} else if (dish===2) { // pizza
    let p_flavour = +prompt("Kindly enter the corresponding number according to the pizza flavour you want to order  \n 1. Pepperoni Pizza \n 2. Mexican Pizza");
        if (p_flavour===1) { // Pepperoni pizza
            let p_deal = +prompt("Kindly enter the corresponding number according to the deal you want to order  \n 1. 2 Medium Pepperoni Pizzas for Rs. 2000 \n 2. 2 Large Pepperoni Pizzas for Rs. 3000");
                if (p_deal===1) { // 2 med Pepperoni pizzas for rs 2000
                    alert("Thank you! \n Your order has been received. \n Order: 2 Medium Pepperoni Pizzas \n Amount: Rs. 2000");
                } else if (p_deal===2) { // 2 large Pepperoni pizzas for rs 3000
                    alert("Thank you! \n Your order has been received. \n Order: 2 Large Pepperoni Pizzas \n Amount: Rs. 3000");
                } else{
                    alert("Please choose a valid number from 1-2")
                }
        } else if (p_flavour===2) { // Mexican Pizza
            let p_deal = +prompt("Kindly enter the corresponding number according to the deal you want to order  \n 1. 2 Medium Mexican Pizzas for Rs. 2000 \n 2. 2 Large Mexican Pizzas for Rs. 3000");
                if (p_deal===1) { // 2 med Mexican Pizzas for rs 2000
                    alert("Thank you! \n Your order has been received. \n Order: 2 Medium Mexican Pizzas \n Amount: Rs. 2000");
                } else if (p_deal===2) { // 2 large Mexican Pizzas for rs 3000
                    alert("Thank you! \n Your order has been received. \n Order: 2 Large Mexican Pizzas \n Amount: Rs. 3000");
                } else{
                    alert("Please choose a valid number from 1-2");
                }
        } else{
            alert("Please choose a valid number from 1-2");
        }
} else if (dish===3) { // ice cream
    let i_flavour = +prompt("Kindly enter the corresponding number according to the ice cream flavour you want to order  \n 1. Chocolate Ice-Cream \n 2. Vanilla Ice-Cream");
        if (i_flavour===1) { // chocolate ice cream
            let i_deal = +prompt("Kindly enter the corresponding number according to the deal you want to order  \n 1. 3 cups of Chocolate Ice cream for Rs.900 \n 2. 5 cups of Chocolate Ice cream for Rs.1500");
                if (i_deal===1) { // 3 cups of Chocolate Ice cream for Rs.900
                    alert("Thank you! \n Your order has been received. \n Order: 3 cups of Chocolate Ice cream \n Amount: Rs. 900");
                } else if (i_deal===2) { // 5 cups of Chocolate Ice cream for Rs.1500
                    alert("Thank you! \n Your order has been received. \n Order: 5 cups of Chocolate Ice cream \n Amount: Rs. 1500");
                } else{
                    alert("Please choose a valid number from 1-2")
                }
        } else if (i_flavour===2) { // vanilla ice cream
            let i_deal = +prompt("Kindly enter the corresponding number according to the deal you want to order  \n 1. 3 cups of Vanilla Ice cream for Rs.900 \n 2. 5 cups of Vanilla Ice cream for Rs.1500");
                if (i_deal===1) { // 3 cups of Vanilla Ice cream for Rs.900
                    alert("Thank you! \n Your order has been received. \n Order: 3 cups of Vanilla Ice cream \n Amount: Rs. 900");
                } else if (i_deal===2) { // 5 cups of Vanilla Ice cream for Rs.1500
                    alert("Thank you! \n Your order has been received. \n Order: 5 cups of Vanilla Ice cream \n Amount: Rs. 1500");
                } else{
                    alert("Please choose a valid number from 1-2")
                }
        } else{
            alert("Please choose a valid number from 1-2");
        } 
} else{
    alert("Please choose a valid number from 1-3")
}
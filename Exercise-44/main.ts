//Q:44   Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//       The function should have one parameter that collects as many items as the function call provides,
//       and it should print a summary of the sandwich that is being ordered. Call the function three times,
//       using a different number of arguments each time.

function makesandwich(...item: string[])
{
    console.log("\nMaking a sandwich using the following items: \n");
    item.forEach(singleitem => console.log(singleitem));

    console.log("\nEnjoy your Sandwich");
}


makesandwich("Bread","Chicken","Chicken spread","Ice berg","Onion");

makesandwich("Bread","Peanut butter");

makesandwich("Bread","Chicken","Mayo","Cheese","Onion","Lettuce","Egg");
//Q:16  More Guests: You just found a bigger dinner table, so now more space is available. 
//      Think of three more guests to invite to dinner.
//    • Start with your program from Exercise 15. Add a print statement to the end of your program 
//      informing people that you found a bigger dinner table.
//    • Add one new guest to the beginning of your array.
//    • Add one new guest to the middle of your array. • Use append() to add one new 
//      guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Areeba", "Zara", "Hira", "Tooba"];
var notComing = guestList[1];
console.log(notComing, "is not coming");
guestList.splice(1, 1, "Sara");
console.log("Hello guys,we havefound a bigger table for dinner!");
guestList.unshift('Alishba'); //unshift means adding something in the beggining of your array
guestList.push('Farah'); //push means adding something at the end of your array
var middleIndex = Math.floor(guestList.length / 2); //method used to add something in the middle of array
guestList.splice(middleIndex, 0, "Meerub");
console.log("Updated list of our guests");
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, " would you like to join the dinner at my place?")); });

//Q:18   Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//       and you have space for only two guests.
//     • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//       invite only two people for dinner.
//     • Remove guests from your list one at a time until only two names remain in your list. 
//       Each time you pop a name from your list, print a message to that person letting them
//       know you’re sorry you can’t invite them to dinner.
//     • Print a message to each of the two people still on your list, letting them know they’re still invited.
//     • Remove the last two names from your list, so you have an empty list. 
//       Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Areeba", "Zara", "Hira", "Tooba"];
var notComing = guestList[1];
console.log(notComing, "is not coming");
guestList.splice(1, 1, "Sara");
console.log("Hello guys,we have found a bigger table for dinner!");
guestList.unshift('Alishba'); //unshift means adding something in the beggining of your array
guestList.push('Farah'); //push means adding something at the end of your array
var middleIndex = Math.floor(guestList.length / 2); //method used to add something in the middle of array
guestList.splice(middleIndex, 0, "Meerub");
console.log("Updated list of our guests");
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, " Would you like to join the dinner at my place?")); });
console.log("Unfortunately, the new dinner table won't arrive in time, so i can only invite two people.");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I can't invite you to the dinner."));
}
console.log("Invitation to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Hello, ".concat(lasttwo, " you are still invited to the dinner")); });
//for removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);

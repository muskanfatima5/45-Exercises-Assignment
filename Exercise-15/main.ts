//Q:15  Changing Guest List: You just heard that one of your guests can’t make the dinner,
//      so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guestList = ["Areeba","Zara","Hira","Tooba"];
let notComing = guestList[1];

console.log(notComing, "is not coming");

guestList.splice(1, 1, "Sara");
guestList.forEach(guest => console.log(`Hello ${guest},would you like to join the dinner at my place? `))
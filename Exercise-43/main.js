//Q:43   Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great()
//       with a copy of the array of magicians’ names. Because the original array will be unchanged,return the new
//       array and store it in a separate array. Call show_magicians() with each array to show that you have one array 
//       of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Charlie", "Daniel", "Sam"];
var copy_magicians_name = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_name);
console.log(" Original Array\n ");
show_magicians(magicians_names);
console.log("\n Copied Array\n ");
show_magicians(copy_great_magicians);

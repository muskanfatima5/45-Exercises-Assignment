//Q:41   Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//       which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magicians_names = ["Charlie", "Daniel", "Sam"];
show_magicians(magicians_names);

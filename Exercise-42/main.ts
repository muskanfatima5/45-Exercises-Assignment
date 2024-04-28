//Q:42   Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
//       that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//       Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[])
{
     magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[])
{
     return magicians.map(name => `The Great ${name}`);
}

let magicians_names = ["Charlie","Daniel","Sam"]

let great_magicians = make_great(magicians_names);

show_magicians(great_magicians)


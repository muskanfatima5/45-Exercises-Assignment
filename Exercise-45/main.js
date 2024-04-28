//Q:45   Cars: Write a function that stores information about a car in a Object. The function should always receive
//       a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
//       Call the function with the required information and two other name-value pairs, such as a color or an 
//       optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("KIA", "Sportage", "color: white", "sunroof: true", "year: 2023");
console.log(my_car);

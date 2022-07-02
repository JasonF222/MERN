// Javascript Hoisting //

// # 1 //

// console.log(hello);                               
// var hello = 'world';                             

// As seen by interpreter //

// var hello;
// console.log(hello);
// hello = "world";

// Output prediction : undefined //

// # 2 //

// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// As seen by interpreter //

// var needle;
// function test() {
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test();

// Output prediction : magnet //

// # 3 //

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// As seen by interpreter //

// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);

// }
// brendan = 'super cool';
// console.log(brendan);

// Output prediction : super cool //

// # 4 //

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// As seen by interpreter //

// var food;
// console.log(food);
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
// }
// eat();

// Output prediction : undefined, half-chicken //

// # 5 //

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// As seen by interpreter //

// var mean = function () {
//     var food;
//     food = 'chicken';
//     console.log(food);
//     food = 'fish';
//     console.log(food);
// }
// mean();
// console.log(food);

// Output prediction: chicken, fish, error //

// # 6 //

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// As seen by interpreter //

// var genre;
// genre = 'disco';
// console.log(genre);
// function rewind() {
//     var genre;
//     genre = 'rock';
//     console.log(genre);
//     genre = 'r&b';
//     console.log(genre);
// }
// rewind();
// console.log(genre);

// Output prediction: disco, rock, r&b, disco //

// # 7 //

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// As seen by interpreter //

// var dojo;
// dojo = 'san jose';
// console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = 'seattle';
//     console.log(dojo);
//     dojo = 'burbank';
//     console.log(dojo);
// }
// learn();
// console.log(dojo);

// Output prediction: san jose, seattle, burbank, san jose //

// # 8 BONUS //

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }


// Output prediction : { name: 'Chicago', students: 65, hiring: true } , error //
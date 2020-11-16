'use strict';

// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //   order: function (starterIndex, mainIndex) {
// //       return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
// //   },
// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // ///////////////////////////
// // ////  DESTRUCTURING ARRAYS
// // ///////////////////////////
// // let [main ,, secondary] = restaurant.categories;
// // console.log(main,secondary);

// // //TRICK = CHANGING VALUES
// // [main, secondary] = [secondary, main];
// // console.log(main,secondary);

// // // DESTRUCTURING ARRAY IN OBJECT
// // const [starter, mainPlate] = restaurant.order(2,0);
// // console.log(starter, mainPlate);

// // // DESTRUCTURING NESTED ARRAY
// // const nested = [2, 4, [5, 6]];
// // const [i,,[j,k]] = nested;
// // console.log(i,j,k);

// // //DEFAULT VALUES WITH DESTRUCTURE
// // const [p=1, q=1, r=1] = [8,9];
// // console.log(p,q,r);


// console.log(0 && 'Hello' && 1 && 'jonas');
// console.log('Hello' && 0 && 1 && 'jonas');
// console.log('Hello' && 1 && 0 && 'jonas');
// console.log('Hello' && 1 && 1 && 'jonas');

// ///////////////////////////////////////
// ////  OBJECTS DESTRUCTURING
// ///////////////////////////////////////
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: 'Via del Sole, 21',
// //   starterIndex: 1,
// // });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);


// //SPREAD
// // Iterables: arrays, strings, maps, sets. 
// // --> NOT <---  objects
// // Dá pra usar spread em todos os iterables
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];

// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`);
// // Não pode por aqui não espera multiplos valores separador por uma virgula


// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3;
// //const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(answer===question.get('correct')));

// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));


console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

console.log(new String('jonas'));

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
//console.log(announcement.replace(/door/g, 'gate'));
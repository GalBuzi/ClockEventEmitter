// Twitter Class - https://edabit.com/challenge/Nc75jSjR5nuBfx7TK
//#region

// class Twitter {
//   private _pw: string;
//   public user: string;
//   private _tweets: string[] = [];

//   constructor(user: string, pass: string) {
//     this.user = user;
//     this._pw = pass;
//   }

//   // shortcut to define properties
//   // constructor(
//   //   public user: string,
//   //   private _pw: string
//   // ) { }

//   // setter not neccessary
//   // set pw(pass: string) {
//   //   throw new Error('ccanot assign');
//   // }

//   get pw() {
//     return '****';
//   }

//   checkPassword(pass: string) {
//     return this._pw === pass;
//   }

//   set tweet(t: string) {
//     this._tweets.push(t);
//   }

//   get tweets() {
//     return [...this._tweets];
//   }
// }

//#endregion

// Coffee Shop - https://edabit.com/challenge/ydgurBgEdGkueNmmp
//#region
// interface IMenuItem {
//   name: string;
//   type: 'food' | 'drink';
//   price: number;
// }

// class CoffeShop {
//   constructor(
//     private _name: string,
//     private _menu: IMenuItem[],
//     private _orders: string[] = []
//   ) { }

//   addOrder(itemName: string): "This item is currently not available" | undefined {
//     const item = this._menu.find(item => item.name === itemName);
//     if (!item) return 'This item is currently not available';
//     this._orders.push(itemName);
//   }

//   fulfillOrder(): string {
//     if (this._orders.length === 0) {
//       return 'empty';
//     }

//     const orderName = this._orders.shift();
//     return `${orderName}`;
//   }

//   dueAmount(): number {
//     return this._orders.reduce((acc, order) => {
//       const menuItem = this._menu.find(item => item.name === order);
//       if (!menuItem) return acc;
//       return acc + menuItem.price;
//     }, 0);
//   }

//   cheapestItem(): string {
//     let cheapest = Number.MAX_VALUE;
//     let name = '';
//     this._menu.forEach(item => {
//       if (item.price < cheapest) {
//         cheapest = item.price;
//         name = item.name;
//       }
//     });

//     return name;
//   }

//   drinksOnly(): string[] {
//     return this._menu
//       .filter(item => item.type === 'drink')
//       .map(item => item.name);
//   }
// }

// const o: IMenuItem[] = [
//   { name: 'pizza', type: 'food', price: 12 },
//   { name: 'cola', type: 'drink', price: 12 },
//   { name: 'soda', type: 'drink', price: 12 },
//   { name: 'burger', type: 'food', price: 12 }
// ];

// const coffeShop = new CoffeShop('shop', o);

// console.log(coffeShop.drinksOnly());
//#endregion

// Sort Authors Last Names Alphabetically - https://edabit.com/challenge/vtFsh5CzFep6b9gDf
//#region
// interface IBook {
//   name: string;
//   rating: string;
//   author: string
// }

// function sortByLastName(books: IBook[]) {
//   return books.sort((firstBook, secondBook) => {
//     const firstLastName = firstBook.author.split(' ')[1];
//     const secondLastName = secondBook.author.split(' ')[1];
//     return firstLastName.localeCompare(secondLastName);
//   });
// }

// const books: IBook[] = [
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
// ];

// console.log(sortByLastName(books));
//#endregion

// The Frugal Gentleman - https://edabit.com/challenge/ujzhzyvGoASKxSAib
//#region

// interface IWine {
//   name: string;
//   price: number;
// }

// function chosenWine(wines: IWine[]) {
//   if (wines.length === 0) return null;
//   if (wines.length === 1) return wines[0];
//   wines.sort((firstWine, secondWind) => {
//     return firstWine.price - secondWind.price;
//   });

//   return wines[1].name;
// }

// const wines = [
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ];

// console.log(chosenWine(wines));

//#endregion

// Growing and Shrinking Potions - https://edabit.com/challenge/8L62AipTvCLPQKtFH
//#region
// function afterPotion(str: string) {
//   const result = [...str].reduce((acc: string, letter: string) => {
//     if (letter === 'A') return (parseInt(acc) + 1).toString();
//     if (letter === 'B') return (parseInt(acc) - 1).toString();
//     return (acc + letter);
//   }, '');
//   return result.toString();
// }

// function f(str: string) {
//   return [...str].reduce((pre, cur) => {
//     if (typeof Number(cur) === 'number' && !isNaN(Number(cur))) {
//       return pre + cur;
//     } else {
//       let last = Number(pre[pre.length - 1]);
//       let rest = pre.substring(0, pre.length - 1);
//       if (cur === 'A') return rest + (last + 1);
//       return rest + (last - 1);
//     }
//   }, "");
// }

// console.log(f("9A123"));
// console.log(typeof Number('a'));


// console.log(afterPotion('9A123'));

// console.log(typeof Number('a') === 'number');
//#endregion

// Text Editor Part 1 - https://edabit.com/challenge/DAkbqtDsK7uRzKPrg
//#region
// let str = '';
// function insert(text: string, position: number) {
//   if (position == 0) {
//     str = text;
//     return;
//   }
//   str = str.substring(0, position) + text + str.substring(position);
// }

// function deleteText(start: number, count: number) {
//   const chars = str.split('');
//   chars.splice(start - count, count);
//   str = chars.join('');
// }
// insert('foo', 0);
// console.log(str);
// insert(' bar', 3);
// deleteText(4, 2);
// console.log(str);

// type Operation = IInsert | IDelete;

// interface IInsert {
//   operation: 'insert';
//   text: string;
//   position: number;
// }

// interface IDelete {
//   operation: 'delete';
//   from: number;
//   length: number
// }

// function edit(operation: Operation[]): string {
//   return operation.reduce((acc, curr) => {
//     if (curr.operation === 'insert') {
//       let begin = acc.substring(0, curr.position);
//       let end = acc.substring(curr.position);
//       return begin + curr.text + end;
//     }

//     let begin = acc.substring(0, curr.from - curr.length);
//     let end = acc.substring(curr.from);
//     return begin + end;
//   }, '');
// }

// const ops: Operation[] = [
//   { operation: "insert", text: 'foo bar', position: 0 },
//   { operation: "delete", from: 4, length: 2 }
// ]

// console.log(edit(ops));
//#endregion

// Divide Array into Chunks - https://edabit.com/challenge/g8jGf8wrHtmwFfM8H
//#region
// function chunkify(arr: any[], size: number) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }

//   return newArr;
// }

// console.log(chunkify([2, 3, 4, 5, 6, 7], 4));
//#endregion

// Execution Context
//#region
// class Hero {
//   constructor(private name: string) { }

//   getName() {
//     return this.name;
//   }
// }

// // var hero = {
// //   name: 'jdklsa',
// //   getName: function () {
// //     return this;
// //   }
// // };

// const firstHero = new Hero('first');
// const secondHero = new Hero('second');

// console.log(firstHero.getName.bind(secondHero)());

// // var stolenGetName = firstHero.getName;
// // console.log(stolenGetName());
// // console.log(firstHero.getName());

// var obj = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log('outer func : ' + this);
//     console.log("outer func " + self);
//     (function () {
//       console.log("inner func " + this);
//       console.log("inner func " + self);
//     })();
//   }
// }

// obj.func();
//#endregion

// Closures
//#region
// function get() {
//   return function multiBy2(param2: number) {
//     return  param2 * 2;
//   }
// }

// const result = get()(3);
// function doNothing() {
//   return function doSomething(param: string){
//     console.log(param);
//   }
// };

// const theString = doNothing();
// theString("noam");
//#endregion

// Scopes
//#region
// 1
// var x = 5;

// function func() {
//   x = 8;

//   console.log(x);
// }

// func();

// 2
// console.log(x);

// if (true) {
//   var x = 'hello';
// }

// console.log(x);

// 3
// console.log(x);

// (() => {
//   var x = 'hello';
// })();

// console.log(x);
//#endregion

// Object Access - ross example
//#region
// let anyVar;
// console.log(typeof anyVar);
// // anyVar = "some value";
// anyVar = 26;
// console.log(typeof anyVar);

// // let x = anyVar;
// // x = false;

// let ross = {};
// ross = { p: 2 }
// console.log(ross);

// let ross = {
//   firstName: "Ricardo",
//   lastName: "Gonzales",
//   age: 26,
//   getSalary: (base: number) => base * 12
// };

// ross['id'] = 18;
// console.log(ross['id']);

// const obj = {
//   [name : string] : string
// }
//#endregion

// Deep/Shallow Compra/Copy
//#region
// let o1 = {
//   name: 'gal',
//   arr: [1, 2, 3, 4]
// }
// let o2 = o1
// o2.name = 'shani'
// console.log(o1);
// let o3 = { ...o1 }
// o3.arr = [...o1.arr]
// o3.name = 'change'
// o3.arr[0] = 'bla'
// console.log('o1: ', o1);
// console.log('o3: ', o3);

//#endregion

// Event Loop Examples
//#region

// setImmediate(() => console.log("setImmediate"));
// Promise.resolve()
//   .then(() => console.log("promise 1"))
//   .then(() => console.log("promise 2"))
//   .then(() => {
//     console.log('promise 3')
//     //process.nextTick(() => console.log('nextTick 1'));
//   });
// console.log("Kick-off");
// // func();
// setTimeout(() => {
//   console.log("timeout 1")
//   Promise.resolve().then(() => console.log('Promise 7'));
// }, 0);
// // process.setImmediate(()=> console.log('setImmidiate'));
// process.nextTick(() => {
//   console.log("nextTick 1");
//   // process.nextTick(() => console.log('nextTick 2'));
// });
// Promise.resolve()
//   .then(() => console.log("promise 4"))
//   .then(() => console.log("promise 5"))
//   .then(() => console.log("promise 6"));
// process.nextTick(() => console.log("nextTick 2"));
// console.log("The end!");
// setTimeout(() => console.log("timeout 2"), 0);

// setTimeout 0
// Kick - off
// The end!
// nextTick 1
// nextTick 2
// promise 1
// promise 4
// promise 2
// promise 5
// promise 3
// promise 6
// timeout 1
// Promise 7
// timeout 2
// setImmediate

// setTimeout 1000
// Kick - off
// The end!
// nextTick 1
// nextTick 2
// promise 1
// promise 4
// promise 2
// promise 5
// promise 3
// promise 6
// timeout 1
// Promise 7
// setImmediate
// timeout 2

//#endregion

// var c: number = 1;
// if (c == 1) {
//   console.log("1 will print");
// } else {
//   console.log("not");
// }
// console.log(c);

// import { type } from "os";

// let sum: number = 0;
// let arr1: Array<number> = [1, 2, 2];

// if (a == '1') {
//     console.log(true)
// }
// else {
//     console.log(false)

// }
// var a = 1;
// console.log(typeof a);
// var b = "1";
// console.log(typeof b);
// var c: Array<number> = [1, 2];
// console.log(typeof c);
// var d = { a: 1, b: 2 };
// console.log(typeof d);
// var e = [2, 4];
// console.log(typeof e);

// c.push("apple");
// e.push("cat");
// if (0 == []) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let a = [1, 2, 3];
// let b = 3;
// var found = false;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == b) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log("found");
// } else {
//   console.log("not found");
// }

// function sum(a: Array<number>): number {
//   var sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// }

// console.log(sum([1, 2]));
// function sum(a: Array<number>): number {
//   return (a[0] = 20);
// }
// var arr = [1, 2, 3];
// sum(arr);
// console.log(arr);

// optional parameter-->?,default parameter,dynamic parameter
// ------optional
// function cde(one: number, two: string): any {

//    return two.toLowerCase();

// }
// cde(2)

// function abc(one: number, two?: string | number): any {
//   two?.toLowerCase();
// }
// ----default
// function abc(one: number, two: string | number = "A"): any {
//   if (two != null && typeof two == "string") {
//     return two.toLowerCase();
//   }
// }
// console.log(abc(2, "S"));
// console.log(abc(2, "2"));
// console.log(abc(2, 1));
// console.log(abc(2));
// ------rest or spread operator
// var a = [1, 2, 3];
// console.log(...a);
// var b = [
//   [1, 2],
//   [2, 3],
//   [4, 5],
// ];
// console.log(...b);
// seprating multi dim array and concating it into single array
// var c = [
//   [1, 2],
//   [2, 3],
// ];
// function add(...args: number[][]): number[] {
//   return args.reduce((a, b) => a.concat(b));
// }
// let d: number[] = add(...c);
// console.log(d);

// spreading array and adding it
// function reduce(...args: Array<number>): number {
//   return args.reduce((a, b) => a + b);
// }
// console.log(reduce([1, 2, 3])); array of array
// console.log(reduce(1, 2, 3));

// console.log(reduce(...d));

// spreading multi dim array and adding it

// function summation(...args: number[][]): number {
//   let b = args.reduce((a, b) => a.concat(b));
//   return b.reduce((a, b) => a + b);
// }
// var e = [
//   [1, 1, 1, 1],
//   [1, 2, 3, 3],
// ];
// console.log(summation(...e));

// ---------------------->Object Oriented Programming<--------------//

// common mistake that should not repeat----------------
let a: number = 1;
class Cal {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  multiply() {
    return a; //////////here
  }
}
let e: Cal = new Cal(6, 2);
console.log(e.multiply());
console.log("--------------------------");

// -----------------------------------------------------------------

class Calculator {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }
  multiply() {
    return 5 * this.sum();
  }
}

let c: Calculator = new Calculator(4, 2);
console.log("c val of a", c.a);
console.log("c val of b", c.b);
console.log("sum of 4 and 2", c.sum());
console.log("--------------------------");

let d: Calculator = new Calculator(5, 6);
console.log("sum of 5 and 6", d.sum());
console.log("multiply of 5 and 6", d.multiply());
console.log("--------------------------");

// if you want to have multiple constructors use union operator | and optional parameter ?

class Calc {
  a: number | string;
  b!: number;
  constructor(a: number);
  constructor(a: string);
  constructor(a: number, b: number);
  constructor(a: string, b: number);

  constructor(a: number | string, b?: number) {
    this.a = a;
    if (b != null && typeof b == "number") {
      this.b = b;
    }
  }
}
let f: Calc = new Calc(1);
console.log("a number:", f);

let g: Calc = new Calc("aa");
console.log("a string:", g);

let h: Calc = new Calc(1, 1);
console.log("a number and b number", h);

let i: Calc = new Calc("a", 2);
console.log("a string and b number", i);

console.log("--------------------------");

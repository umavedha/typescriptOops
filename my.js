// 14-9-2022
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
// -----------------------------------------------------
// if (0 == []) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// -------------------------------------------------------
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
// ---------------------------------------------------------
// function sum(a: Array<number>): number {
//   var sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// }
// console.log(sum([1, 2]));
// ---------------------------------------------------------
// function sum(a: Array<number>): number {
//   return (a[0] = 20);
// }
// var arr = [1, 2, 3];
// sum(arr);
// console.log(arr);
// -----------------------------------------------------------
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
// var j = [
//   [1, 1, 1, 1],
//   [1, 2, 3, 3],
// ];
// console.log(summation(...j));
// -------------------------------------------------------------------------------
// ---------------------->Object Oriented Programming<--------------//
// common mistake that should not repeat----------------
var a = 1;
var Cal = /** @class */ (function () {
    function Cal(a, b) {
        this.a = a;
        this.b = b;
    }
    Cal.prototype.sum = function () {
        return this.a + this.b;
    };
    Cal.prototype.multiply = function () {
        return a; //////////here
    };
    return Cal;
}());
var e = new Cal(6, 2);
console.log(e.multiply());
console.log("--------------------------");
// -----------------------------------------------------------------
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.sum = function () {
        return this.a + this.b;
    };
    Calculator.prototype.multiply = function () {
        return 5 * this.sum();
    };
    return Calculator;
}());
var c = new Calculator(4, 2);
console.log("c val of a", c.a);
console.log("c val of b", c.b);
console.log("sum of 4 and 2", c.sum());
console.log("--------------------------");
var d = new Calculator(5, 6);
console.log("sum of 5 and 6", d.sum());
console.log("multiply of 5 and 6", d.multiply());
console.log("--------------------------");
// if you want to have multiple constructors use union operator | and optional parameter ?
var Calc = /** @class */ (function () {
    function Calc(a, b) {
        this.a = a;
        if (b != null && typeof b == "number") {
            this.b = b;
        }
    }
    return Calc;
}());
var f = new Calc(1);
console.log("a number:", f);
var g = new Calc("aa");
console.log("a string:", g);
var h = new Calc(1, 1);
console.log("a number and b number", h);
var i = new Calc("a", 2);
console.log("a string and b number", i);
console.log("----------");
// ------------------------------------------------------------------
// 15-9-2022
console.log("15-9-2022");
console.log("----------");
var A = /** @class */ (function () {
    function A(a) {
        this.a = a;
    }
    A.prototype.extend = function (e) {
        return this.a + e;
    };
    return A;
}());
var b = new A(4);
console.log(b.extend(5));
console.log("--------------------------");
var B = /** @class */ (function () {
    function B(a) {
        this.a = a;
    }
    B.prototype.extend = function (e) {
        return this.a + e;
    };
    B.prototype.concat = function (a, e) {
        this.a = a;
        var d = this.extend(e);
        // this.a = a;
        return d * a;
    };
    return B;
}());
var x = new B(4);
console.log(x.concat(5, 2));

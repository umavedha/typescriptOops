// interface Iemployee {
//     empCode: number;
//     empName: string;
//     empDept?: string;

import { IPVersion } from "net";

// }
// let empObj1: Iemployee = {
//     empCode: 1;
//     empName: 'steve';

// }

// let empObj2: IEmployee = {
//     empCode: 1;
//     empName: 'Bill'
//     empDept:'IT'

// }
// interface IPerson {
//   name: string;
//   gender: string;
// }

// interface IEmployee extends IPerson {
//   empCode: number;
// }
// let empObj: IEmployee = {
//   empCode: 1,
//   name: "Bill",
//   gender: "male",
// };
// console.log(empObj);

// interface Citizen {
//   name: string;
//   readonly SSN: number;
// }

// let personObj: Citizen = { SSN: 11111444, name: "james Bond" };
// (personObj.name = "steve smith")
// console.log(personObj);

// interface IEmployee {
//   emoCode: number;
//   name: string;
//   getSalery: (number) => number;
// }
// class Employee implements IEmployee {
//   emoCode: number;
//   name: string;
//   constructor(empCode: number, name: string) {
//     this.emoCode = empCode;
//     this.name = name;
//   }
//   display(): void {
//     console.log("Name =" + this.name + ",Employee code =" + this.emoCode);
//   }
// }
// let per: IPerson = new Employee(100, "Bill");
// per: display();
// let emp: IEmployee = new Employee(100, "Bill");
// emp: display();

// class person {
//   name: string;
// }
// interface IEmployee extends person {
//   empCode: number;
// }
// let emp: IEmployee = { empCode: 1, name: "James Bond" };
// console.log(person);

// abstract class person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// display(): void {
//     console.log(this.name);

// }
// abstract find(string):person
// }
// class Employee extends person {
//     empCode: number;
//     constructor(name:string)

// }


interface IEmployee {
    empCode: number;
    empName: string;
}
let emp1: Readonly<IEmployee> = {
    empCode: 1,
    empName: 'steve',
}
emp1.empCode = 100,
emp1.empName='Bill',


    let emp2: IEmployee = {
        empCode: 1,
        empName:"steve",
    }
emp2.emoCode = 100,
emp2.empName='Bill',
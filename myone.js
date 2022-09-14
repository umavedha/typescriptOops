// let a = 1
// if (a == '1') {
//     console.log(true)
// }
// else {
//     console.log(false)
// }
// var c = [1, 2];
// console.log(typeof c);
// var d = { a: 1, b: 2 };
// console.log(typeof d);
// var e = [2, 4];
// console.log(typeof e);
// if ("0" == []) {
//   console.log("true");
// }
// else {
//   console.log("false");
// }

// spread operator
// a=[1,2,3]
// b=[4,5,6]
// a=b
// a
// a=[1,2,3]
// b=a
// b[2]=8
// 8
// console.log(a)
// a=[1,2,3]
// b=Object.assign(a)
// b=[...a]
// b[2]=8
// 8
// console.log(a)
// console.log(b)
// a=[3,4,5,6]
// b=Object.assign(a)
// b[1]=0
// 0
// console.log(a)
// a=[3,4,5,6]
// b=JSON.stringify(a)
// b=JSON.parse(JSON.stringify(a))
// a=[[1,2,3],[4,5,6],[7,8,9]]
// b=[...a]
// b[0][0]=2
// console.log(a)
// console.log(b)
// a=[[1,2,3],[4,5,6],[7,8,9]]
// b=JSON.parse(JSON.stringify(a))
// b[0][1]=3
// console.log(a)
// console.log(b)
a = [{ 'id': 1, 'name': 'yc', 'address': 'chennai' },
    { 'id': 2, 'name': 'deva', 'address': 'thanjavur' },
    { 'id': 3, 'name': 'stalin', 'address': 'trichy' },
    { 'id': 4, 'name': 'vijay', 'address': 'tiruvannamalai' },
    { 'id': 5, 'name': 'surya', 'address': 'vellore' },
    { 'id': 6, 'name': 'karthi', 'address': 'kanchipuram' },
    { 'id': 7, 'name': 'dharani', 'address': 'salem' },
]
b = [...a] //changed for b and reference
b[4].address = 'madurai'
console.log(a)
console.log(b)

student=[{ 'id': 1, 'name': 'yc', 'address': 'chennai' },
    { 'id': 2, 'name': 'deva', 'address': 'thanjavur' },
    { 'id': 3, 'name': 'stalin', 'address': 'trichy' },
    { 'id': 4, 'name': 'vijay', 'address': 'tiruvannamalai' },
    { 'id': 5, 'name': 'surya', 'address': 'vellore' },
    { 'id': 6, 'name': 'karthi', 'address': 'kanchipuram' },
    { 'id': 7, 'name': 'dharani', 'address': 'salem' },
]
studentdetail = JSON.parse(JSON.stringify(student)) //doesnt update the reference
studentdetail[4].address = 'madurai'
console.log(student)
console.log(studentdetail)
// ============spread parameter^^^^^^
function myfun1(a) {
    myfun2(a)
}
function myfun2(a) {
    myfun3(a)
}
function myfun3(a) {
    return a + 1;
}
console.log(myfun1(1))
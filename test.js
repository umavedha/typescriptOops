function myfun1(a) {
    myfun2(a)
}
function myfun2(a) {
    myfun3(a)
}
function myfun3(a) {
    myStr="1"
    return b + myStr;
}
console.log(myfun1(1))
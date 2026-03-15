alert(1||0); // 1
const a= 0
const b = "text"
const c= 1
console.log(a||b); // text
console.log(a&&b); // 0
console.log(b&&c); // 1
console.log(a&&b||c); // 1 why? because && has higher precedence than ||, so it evaluates a&&b first which results in 0, then it evaluates 0||c which results in 1.
console.log(a!==b) // true because a is 0 and b is "text", they are not equal


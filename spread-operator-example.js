// let demo1 = [1,2,3];
// let demo2 = [4,7,8];
// let demo3 = [...demo1,...demo2];
// console.log(demo3);
// let car1 = {
//     brand : "Toyota",
//     color : "red",
//     year : 2000
// }
// let car2 = {
//     brand1 : "Mota",
//     color1 : "yellow",
//     year1 : 2008
// }
// let car3 = {...car1,...car2};
// console.log(car3);

// let car1 = "Audi";
// let car2 = [...car1];
// console.log(car2);
let arr = [1,2,3,4,5,6];
// let [a,b,c,d,e,f] = arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

let [a,b,...others] = arr;
console.log(a)
console.log(b)
console.log(others)


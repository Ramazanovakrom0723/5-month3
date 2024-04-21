// 40-misol 

// function middl_Number(params) {
//     let arr = [...params]
//     let number_1 = 0
//     let number_2 = 0
//     let number_3 = 0
//     if(arr.length % 2 == 0){
//         number_2 = (arr.length / 2)
//         number_3 = (arr.length / 2) - 1
//         number_1 = (arr[number_2] + arr[number_3]) / 2
//         return number_1
//     }else{
//         number_1 = (arr.length / 2) - 0.5
//         return (arr[number_1]);
//     }
// }
// console.log(middl_Number([1,2,3,4,5]));













// // 41-misol 

// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     }
// ]
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.read) {
//         console.log(`${i + 1}. ${book.author} ning ${book.title} kitobi o’qilgan`);
//     } else {
//         console.log(`${i + 1}. ${book.author} ning ${book.title} kitobi o’qilmagan`);
//     }
// }















// // 42-misol 

// function world(arr) {
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i].length;
//     }
//     return obj;
// }
// const string = ["text", "world", "laptop"]
// const box = world(string)
// console.log(box);














// 43-misol  

// function item(obj, n) {
//     const box = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             box[key] = obj[key] * n;
//         }
//     }
//     return box;
// }
// const n = 3;
// const obj = {a: 2, b: 3, c: 4};
// const box = item(obj, n);
// console.log(box);











// 44-misol 

// function item(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }
// console.log(item(4)); 
// console.log(item(5)); 











// 45-misol 

// function box(arr) {
//     const obj = {};
//     arr.forEach(word => {
//         obj[word] = (obj[word] || 0) + 1;
//     });
//     return obj;
// }
// const item = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const result = box(item);
// console.log(result);










// 46-misol 

// function item(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * arr[i]);
//     }
//     return result;
// }
// const input = [1, 2, 3, 4, 5];
// const output = item(input);
// console.log(output); 











// // 47-misol 

// const input = [1, -4, 12, 0, -3, 29, -150];
// const box = input.filter(num => num > 0);
// const item = box.reduce((acc, curr) => acc + curr, 0);
// console.log(item); 












// 48-misol 

// function item(str) {
//     const initials = str.split(' ').map(word => word.charAt(0)).join('');
//     return initials;
// }
// const input = 'George Raymond Richard Martin';
// const output = item(input);
// console.log(output); 











// 49-misol 

// function item(arr) {
//     arr.sort((a, b) => a.age - b.age);
//     const youngest = arr[0].age;
//     const oldest = arr[arr.length - 1].age;
//     const difference = oldest - youngest;
//     return difference;
// }
// const input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];
// const output = item(input);
// console.log(output); 














// 50-misol 

// let Number = function(nums) {
//     const count = {};
//     const result = [];
//     for (const num of nums) {
//         count[num] = (count[num] || 0) + 1;
//     }
//     for (const num in count) {
//         if (count[num] === 1) {
//             result.push(num);
//         }
//     }
//     return result;
// };
// console.log(Number([4, 1, 2, 1, 2, 9, true])); 
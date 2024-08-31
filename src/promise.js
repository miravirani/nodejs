// console.log("before")

// let myPromise = new Promise((resolve, reject) => {
//     let x = 0
//     setTimeout(() => {
//         (x === 0) ? reject("Rejected!") : resolve("Resolved!")
//     }, 3000)
// })

// console.log("after")

// myPromise.then((x) => {

//     console.log("Successful:", x)
// }).catch((y) => {
    
//     console.log("Not successful:", y)
// })




// import axios from "axios"

// async function getData() {

//     const runData = await axios.get(https://6620acf43bf790e070b04140.mockapi.io/admin/admin)
//     console.log(`Data In Method :-> `)
//     return runData.data
// }

// const dataApi = await getData()

// console.log(3456789789)
// console.log(After Method Calling :-> ,dataApi)
// console.log(5678998)

// import axios from "axios";

// function getData() {

//     const myPromise = new Promise((resolve, reject) => {

//         axios.get(https://6620acf43bf790e070b04140.mockapi.io/admin/admin)
//         .then(data1 =>{
//             console.log(Sussecfully Run.... , data1.data);
//         }).catch(data2 =>{
//             console.log(Fail To Run... , data2.data);
//         })

//     })

//     return myPromise
// }

// getData().then(data1 => {
//     console.log(dfg8765)
//     console.log(Aftre Method Calling:->, data1)
// }).catch(data2 => {
//     console.log(fail:-> , data2)
// })
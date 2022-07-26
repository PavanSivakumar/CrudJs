let promise4 = new Promise((resolve, rejects) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 4000);
})


async function fun(resolve, reject){
    try {
        let result = await promise4;//Waits until promise is completed
        console.log(result);
        console.log('hello');
    } catch (error) {
        console.log('error')
    }
}

fun()

// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();


// let p = new Promise(function(resolve , rejects){
//     return rejects('failure');
// })

// p.then((message) => {
    
// }).catch((message) => {
//     console.log('error' + message)
// })

async function asyncFun(){
console.log('Async function')
return Promise.resolve('success');
}

asyncFun().then((message) => {
    console.log(message);
})

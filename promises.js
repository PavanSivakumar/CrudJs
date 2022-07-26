let p = new Promise((resolve , rejects) => {
let a = 1+4
if(a == 2){
    resolve('success')
}
else{
    rejects('Failure')
}
})

p.then((message) => {
    console.log('This is in then ' + message)
}).catch ((message) => {
    console.log('This is in catch ' + message)
})




//second example
let p2 = new Promise((resolve , rejects) => {
 resolve('Video 1 recording')
})

let p3 = new Promise((resolve , rejects) => {
    resolve('Video 2 recording')
   })

Promise.all(
    [ p2 
    , p3] ) //all will be considered
.then((message) => {
    console.log(message);
})

Promise.race(
    [ p2 
    , p3] ) //which one first will be executed,that will be considered
.then((message) => {
    console.log(message);
})
//const promise=new Promise((resolve,reject)=>{
//    reject(Error("Error ocuured"));
//    
//});
//promise.catch(error =>console.log(error.message));
//promise.catch(error =>console.log(error.message));

//console.log('start');
//const promise1 = new Promise((resolve, reject)=>{
//    console.log(1);
//});
//console.log('end');

//function performTask(){
//    return new Promise(function(resolve,reject){
//
//    }) ;
//}
//let taskPromise=performTask()

//taskPromise
//    .then(function(){
//        console.log('Success 1');
//    })
//    .then(function(){
//        console.log('Success 2');
//    })
//    .then(function(){
//        console.log('Success 3');
//    })
//    .catch(function(){
//        console.log('Error 1');
//        
//    })
//    .then(function(){
//        console.log('Success 4');
//    });

// daut
//const promise = new Promise((resolve)=>{
//    resolve(1);
//});
//promise.then((value)=>{
//    console.log(value);
//    return value +1;
//}).then((value)=>{
//    console.log(value);
//    throw new Error('Something went wrong');
//}).catch((error)=>{
//    console.log(error.message);
//})

//var promise = new Promise(function(resolve,reject){
//    setTimeout(function(){
//        resolve("Resolved!")
//    },1000)
//});

//promise.then(function(value){
//    console.log(value);
//})

//let promise = new Promise(function(resolve, reject){
//    setTimeout(()=> resolve(1),1000);
//});
//promise
//    .then(function(result){
//        console.log(result);
//        return result*2
//    })
//    .then(function(result){
//        console.log(result);
//        return result*2;
//    })
//    .then(function(result){
//        console.log(result);
//        return result*2;
//    })

//daut
//console.log('Start');
//setTimeout(()=>{
//    console.log('Timeout');
//},0);
//Promise.resolve().then(()=>{
//    console.log('Promise resolved');
//});
//console.log('End');

//daut
//let firstTask = new Promise(function(resolve,reject){
//    setTimeout(resolve, 500,'Task One');
//});
//let secondTask;
//let thirdTask = new Promise(function(resolve, reject){
//    setTimeout(resolve, 1200, 'Task Three')
//});
//let forthTask = new Promise(function(resolve, reject){
//    setTimeout(reject, 300, 'Task four')
//});
//let fifthTask = new Promise(function(resolve, reject){
//    setTimeout(resolve, 1000, 'Task Five')
//});

//let combinePromise = Promise.all([firstTask, secondTask,thirdTask,forthTask,fifthTask]);
//combinePromise
//    .then(function(data){
//        data.forEach(function(value){
//            console.log('Result:', value);
//        })
//    })
//    .catch(function(error){
//        console.log('Error:',error);
//    })

//const promise1 = new Promise(resolve=> setTimeout(resolve, 100, 'One')); 
//const promise2 = new Promise(resolve=> setTimeout(resolve, 200, 'Two'));
//Promise .race([promise1, promise2])
//    .then(value => console.log(value))
//    .catch(error => console.log(error));

const promise1=Promise .resolve(1)
const promise2 = new Promise(resolve=> setTimeout(resolve, 100, 'One')); 
const promise3 = new Promise(resolve=> setTimeout(resolve, 200, 'Two'));
Promise .all([promise1, promise2,promise3])
    .then(value => console.log(value))
    .catch(error => console.log(error));

Promise .resolve(1)
    .then(value =>{
        console.log(value);
        return Promise.resolve(2)
    })
    .then(value => console.log(value));
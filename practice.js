//Math & Date
// we have maths methode & properties inside of the Math class that can be access by Math object
//console.log(Math.PI);
//console.log(Math.E);
//console.log(Math.SQRT2);
//console.log(Math.SQRT1_2);
//console.log(Math.LN2);
//console.log(Math.LN10);
//console.log(Math.LOG10E);
//console.log(Math.LOG2E);
//let data=167
// every method in Math class will always return us a value(number)
//console.log(Math.abs(data));
//Math.pow(base,exponent)
//console.log(Math.pow(data,8));
//console.log(Math.sqrt(data));
//console.log(Math.cbrt(data));

// rounding of the data
// 0.5 -> 1 ceil
//0.4 -> 0 floor

//let number=1.9999
//number=Math.round(number)
//console.log(number);
//console.log(Math.ceil(number));
//console.log(Math.floor(number));

//let a=129
//let d=a%10
//a=Math.floor(a/10)
//12 -- 1--

// max and min
//let a=10
//let b=90
//let c=76
//console.log(Math.max(a,b,c));
//console.log(Math.max(a,b,c,123,6,0));
//console.log(Math.min(a,b,c));
//console.log(Math.min(a,b,c,123,6,0));

//let ar=(2* Math.PI * 5).toFixed(3)
//console.log(ar);

// to use the date class i.e. the properties and methods
// we have to create a data object

//let date= new Date()
//console.log(date.getDate());
//console.log(date.getDay());
//console.log(date.getFullYear());
//console.log(date.getHours());
//console.log(date.getMilliseconds());
//console.log(date.getMinutes());
//console.log(date.getMonth());
//console.log(date.getSeconds());
//console.log(date.getTime());
//console.log(date.getTimezoneOffset());
//console.log(date.getUTCDate());

// exception handeling
// try and catch block
//try{
//    let a=10
//    let b=0
//    if(b==0){
//        throw("denominator cannot e 0")
//    }
//    let ans=a/b;
//    console.log(ans)
//}catch(e){
//    // the resolving to that code
//    console.log("An exception occured:",e);

//}

// exception pre-define/ user define


//Promise and async programming 
//promises
//handel all 3 state of promise

// for example whatsapp
// sender -> message ->Reciver
let mypromise=new Promise((resolved,rejected)=>{
    let x=60;
    if(x<50){
        resolved("this promise is resolved")
    }else{
        rejected("this promise is rejected")
    }
})
//promise.then().then() handel errorv.catch()
mypromise.then(value =>{
    console.log("my promise is resolved",value);
}).then(error =>{
    console.log("my promise is rejected",error);
}).catch(err =>{
    console.error("Some error in promise",err)
})

//async program
// build in
// setInterval(()=>{},time), setTimeout(()=>{},time)
// 1000ms = 1s

//setInterval(()=>{
//    console.log("this statement will be repeat on every 2s");
//},2000)

//let interval1=setInterval(()=>{
//    console.log("this statement will be repeat on every 2s");
//},2000)
//document.getElementById('btn').onclick=()=>{ clearInterval(interval1)}
console.log('log1');
console.log('log2');
console.log('log3');
console.log('log4');

setTimeout(()=>{
    console.log("this is function has timout in 3s");
},3000)

async function promise1() {
    let newpromise= new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("my promise is rejected ")
        },200)
        
    })
    return newpromise
}
promise1().then((result)=>{
    console.log("promise resolved",result);
}).catch((err)=>{
    console.error("promise rejected");
})

// async and await
// let doSomthing=async ()=>{}

async function doSomthing() {
    let newpromise= new Promise((resolve, reject) => {
        setTimeout(()=>{
            let x=30;
            if(x<30){
                resolve("my promise is resolved")
            }else{
                reject("my promise is rejected")
            }
        },3000)
        
    })
    return newpromise
    
}
//doSomthing().then((value)=>{
//    console.log("my promise",value);
//}).catch((err)=>{
//    console.error("my promise error",err);
//})

// await promise 
async function solvethis() {
    try{
        let result = await doSomthing()
        console.log(result);
    }catch(err){
        console.error(err);
    }
    
}

solvethis()
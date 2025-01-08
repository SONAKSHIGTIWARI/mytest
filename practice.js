//Math & Date
// we have maths methode & properties inside of the Math class that can be access by Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG10E);
console.log(Math.LOG2E);
let data=167
// every method in Math class will always return us a value(number)
console.log(Math.abs(data));
//Math.pow(base,exponent)
console.log(Math.pow(data,8));
console.log(Math.sqrt(data));
console.log(Math.cbrt(data));

// rounding of the data
// 0.5 -> 1 ceil
//0.4 -> 0 floor

let number=1.9999
number=Math.round(number)
console.log(number);
console.log(Math.ceil(number));
console.log(Math.floor(number));

//let a=129
//let d=a%10
//a=Math.floor(a/10)
//12 -- 1--

// max and min
let a=10
let b=90
let c=76
console.log(Math.max(a,b,c));
console.log(Math.max(a,b,c,123,6,0));
console.log(Math.min(a,b,c));
console.log(Math.min(a,b,c,123,6,0));

let area=(2* Math.PI * 5).toFixed(3)
console.log(area);

// to use the date class i.e. the properties and methods
// we have to create a data object

let date= new Date()
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());````
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getUTCDate());

// exception handeling
// try and catch block
try{
    let a=10
    let b=0
    if(b==0){
        throw("denominator cannot e 0")
    }
    let ans=a/b;
    console.log(ans)
}catch(e){
    // the resolving to that code
    console.log("An exception occured:",e);

}


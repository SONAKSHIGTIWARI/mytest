//function resolveAfter2Second(){
//    return new Promise((resolve)=>{
//        setTimeout(()=>{
//            resolve('resolved')
//        },2000)
//    })
//}
//async function asyncCall() {
//    console.log('calling');
//    const result = await resolveAfter2Second();
//    console.log(result);
//    
//}
//asyncCall()
//
//function z(){
//    return 1
//}
//console.log(z());

//async function z() {
//    return new Promise(() => {
//        
//    })
//    
//}
//console.log(z());

//function withPromises(){
//    let promise = new Promise((resolve, reject) =>{
//        setTimeout(()=>{
//            resolve("Hello World, after 3 seconds")
//        },3000)
//    })
//    promise.then((data)=>{
//        console.log(data);
//    })
//
//    console.log("Some Synchrous Code");
//}
//withPromises();

//async function withAsyncAwait() {
//    let promise = new Promise((resolve, reject) => {
//        setTimeout(()=>{
//            resolve("Hello World")
//        },3000)
//    })
//    const data = await promise;
//    console.log(data);
//    console.log("Some Synchronus Code");
//    
//}
//withAsyncAwait()


//async function withAsyncAwait() {
//    console.log('Start');
//    let promise = new Promise((resolve, reject) => {
//        setTimeout(()=>{
//            resolve("Hello World,after 3 seconds")
//        },10000)
//    })
//    const data = await promise;
//    console.log(data);
//    console.log("Some Synchronus Code, also after 3 seconds");
//    
//}
//withAsyncAwait()

//async function withAsyncAwait() {
//    let promise = new Promise((resolve, reject) => {
//        reject("Hello World")
//        
//    })
//    await promise.catch((error)=>{
//        console.log("Inside Catch Block:",error);
//    })
//    
//}
//withAsyncAwait()

// daut
//async function withAsyncAwait() {
//    try{
//        let promise = new Promise((resolve, reject) => {
//            reject("Hello World")
//        });
//        await promise;
//    }catch{
//        console.log("In the Error Block", error);
//    }
//    
//}
//withAsyncAwait();

let students  = [
    { roll_no: 1,name: 'student1', subject: 'Physics' },
    {  roll_no: 2,name: 'student2', subject: 'Mathematics' },
    {  roll_no: 3,name: 'student3',subject: 'Chemistry' }
];
function createTable(students) {
    let table = document.getElementById('data-table');
    let thead = table.querySelector('thead tr');
    let tbody = table.querySelector('tbody');
    

    let headers = Object.keys(students[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.charAt(0).toUpperCase() + header.slice(1); // Capitalize first letter
        thead.appendChild(th);
    });

    
    students.forEach(item => {
        let tr = document.createElement('tr');
        headers.forEach(header => {
            let td = document.createElement('td');
            td.textContent = item[header];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}


createTable(students);




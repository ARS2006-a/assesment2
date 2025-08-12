// const fetchData = async() =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(response.ok);
//     if(response.ok == true ){
//         const data = await response.json();
//         console.log(data);
//     }
// };
// fetchData();
// console.log("Hello");


// const fetchData = async()=>{
//     const response = await fetch ("https://jsonplaceholder.typicode.com/albums");
//     console.log(response.ok);
//     if(response.ok == true ){
//         const data = await response.json();
//         console.log(data);
//     }
// };
// fetchData();
// console.log("hello");


// const fetchData=async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response.ok);
//       if(response.ok == true){
//     const data = await response.json();
//     console.log(data);
//       }
// };
// fetchData();
// console.log("Hello");


//if the given link is incorrect,
const fetchData=async()=>{
    try{ 
        //successful case we have to write code inside "try"
        const response = await fetch("https://jsonplaceholder.typicode.com/usehrs");
          if(response.ok === true){
    const data = await response.json();
    console.log(data);
          }else{
            throw new Error("something  is wrong");
          }
      } catch (err){
        console.log("Error",err);
      }
       };
       fetchData();

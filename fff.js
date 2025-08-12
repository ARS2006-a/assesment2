//WHILE TRYING ONE OF THESE PLEASE KEEP OTHERS AS COMMENT//

// 1)simple one 
const fetchData = async() =>{
    
        const response = await fetch ("https://jsonplaceholder.typicode.com/albums");
        console.log(response);
        const data  = await response.json();
        console.log(data);
};
fetchData();
console.log("Hello");


// 2)with if
const fetchData  = async()  => {
   const response = await fetch ("https://jsonplaceholder.typicode.com/albums");
        console.log(response.ok);
        if(response.ok === true ){
             const data  = await response.json();
        console.log(data); 
        }
};
fetchData();
console.log("Hello");

//3)with try and catch
const fetchdata=async()=>{
    try{
        //successful can have to write code inside try
        const re= await fetch("https://jsonplaceholder.typicode.com/uslers");
    if(re.ok===true){
    const data=await re.json();
    console.log(data); 
    }else{
        throw new Error("something is wrong");
    }
    }catch(err){
        console.log("Error",err);
    }
};
fetchdata();

//4)all 3 
const fetchData  = async()  => {
    try{
   const response = await fetch ("https://jsonplaceholder.typicode.com/albumks");
      const response1 = await fetch ("https://jsonplaceholder.typicode.com/albumks");
         const response2 = await fetch ("https://jsonplaceholder.typicode.com/albumks");

if(response.ok){
         const data  = await response.json();
        console.log(data);   
}

        if(response.ok === true ){
             const data  = await response.json();
        console.log(data); 
        }
        if(!response.ok || response1.ok || response2.ok){
            throw new error ("Something is wrong");
         }
          } catch (err){
        console.log("Error",err);
      }
};
fetchData();



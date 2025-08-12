//tag selectors
// let body = document.getElementsByTagName("h1");
// console.log(body[0]);

//class selector
// let classes= document.getElementsByClassName("a");
// console.log(classes[1]);

//id selector
// let val = document.getElementById("val");
// console.log(val);

//querySelector
// let varr = document.querySelector(".a");
// console.log(varr);

//querySelectorAll
// let as = document.querySelectorAll("var");
// console.log(as[0]);


//1rst step 1 want node
// let aa = document.querySelector("a");


//read operation
// let text = classes[0].innerHTML;
// console.log(text);


// //write operation
// classes[0].textContent = "Entering from js";


//1rst step 1 want node
// let aaa = document.querySelector(".a");


//read operation
// let texts = aaa.innerHTML;
// console.log(texts);


//write operation
// aaa.textContent = "Entering from js";




//step 1 Classes 
// let node = document.getElementsByClassName("a");


//read operation
// let text = node[0].innerHTML;
// console.log(text);

// let text1 = node[0].textContent;
// console.log(text1);

// let node1 = document.querySelector("button");

// let text2 = node1.textContent;
// console.log(text2);

// let text3 = node1.textContent;
// console.log(text3);

// node1.textContent = "hello";


// let sty  = document.querySelectorAll("h1");
// console.log(sty);

// sty[0].style.color = "red";
// sty[1].style.color = "blue";

// to remove a class 
// sty[1].classList.remove("hidden");

// to add a class 
// sty[1].classList.add("body");

// toggle class
// sty[1].classList.toggle("hidden");
// sty[1].classList.toggle("body");

var obj = {
    id : 1,
    name : "Name",
    email:"ars@gmail.com",
    data:{
        address:"mglr",
        contact:6666,
        adhar:34954,
    info:{
        clg: "SCEM",
        number:5555,
    }
    }
};
// console.log(obj.id); 
// console.log(obj.name); 
// console.log(obj.email); 
// console.log(obj.a); 
// console.log(obj.data.address); 
// console.log(obj.data.contact);
// console.log(obj.data.adhar);  
// console.log(obj.info); //gives undefined
// console.log(obj.data.info.clg);
//  console.log(obj.data.info.number);


console.log(obj);
 JSON.stringify(obj);//json stringify javascript obj to json string
console.log(obj.data);
// JSON.parse(obj);//reverse process of stringify



//to make array :-
let arr = [
    { id:1,name:"as"},
    { id:2,name:"as"},
    { id:3,name:"as"},
    { id:4,name:"as"},
];
console.log(arr);





//instead of for we r usimg this and i think its similar to map.we r doing this to access the array seperately
arr.forEach( (el) => console.log(el) );

//same thing using map
// arr.map((el) => console.log(el));

// arr.forEach((el) => el.id = (el.id*el.id));

// const a = arr.map((el)=>{
//     el.id = el.id*el.id;
//     return el;
// });
// console.log(a);
// //or
// const a = arr.map((el)=>{
//     el.id = el.id*el.id;
//     return {
//         i:el.id,
//         n:el.name,
//     };
// });
// console.log(a);



const b = [0,0,0,0,0,0,0,0,0];
// {
//     id:index,
//     name:index+el,
//     as:id and name

// }

const c = b.map((el,index)=>{
    //let n = el + index;
    //const asd = index + n;
    return{
        id : index,
        name : index + el,
        as : index + index +el,

    };
   
}) .filter((el) => el.id%2 == 1) //to get only odd numbers
console.log(c);



const c = b.map((el,index)=>{
    //let n = el + index;
    //const asd = index + n;
    return{
        id : index,
        name : index+el,
        as : index+index +el,

    };
   
}) .filter((el) => el.id%2 == 0 &&  el.name%2 == 0) //to get only even numbers or 
//making a seperate array :- if there r only even number in tht whole row 
console.log(c);


const c = b.map((el,index)=>{
    //let n = el + index;
    //const asd = index + n;
    return{
        id : index,
        name : index+el,
        as : index+index +el,

    };
   
}) .filter((el) => el.id%2 == 1 || el.name%2 == 1) //to get only odd numbers or 
//making a seperate array :- if there r only odd number in tht whole row 
console.log(c);


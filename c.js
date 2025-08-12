console.log(family);
var family = function(){
    console.log("hgygj");
    console.log("jjygk");
};
family();


function sum(parameter1,parameter2){
let a=parameter1;
let b=parameter2;
console.log(
    "value of parameter 1is:",
    parameter1,
    "value of parameter 2 is:",
    parameter2,
    "sum is:",
    a+b
);
}
sum(3,8);
sum(51,10);


console.log(1+2+"1");


let a=()=>{
    console.log("hello world");

};
a()
a(2,3);


(function(){
    console.log("IIFE");
})();


//tag
var body=document.getElementsByTagName("body");
console.log(body[0]);
let a = [1,2,5,4];
console.log(a[2]);


console.log(a);
for(let i = 0;i < a.length;i++){
    a[i]=a[i]*3;
    console.log(a[i]);
}
console.log(a);
let b=a.map((el,ui)=>{
    return el*ui;
});
console.log(a);
console.log(b);


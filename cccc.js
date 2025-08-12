let a = [1,2,3,4,5,6,7,8,9,10];
//  let b = a.filter((el)=>el>=5).map((el)=>el*7);
// let c = b.map((el)=>el*5);
//  console.log(b);



// let acc = 0;
// acc = acc + 1;
// acc = acc + 2;
// acc = acc + 3;
// acc = acc + 4;
// acc = acc + 5;
// acc = acc + 6;

// const evenSum = a.filter((el)=> el % 2==0).reduce((a,e) =>a+e);
// const oddSum = a.filter((el)=> el % 2==1).reduce((a,e) =>a+e);
// console.log(evenSum,oddSum);


const aa = [0,0,0,0,0,0,0,0,0,0]
const se = aa
.map((el,i)=> i +1)
.filter((el) => el%2 == 0)
.reduce((a,e) => a+e);


const so = aa
.map((el,i)=> i +1)
.filter((el) => el%2 == 1)
.filter((el)=> el>5)
.reduce((a,e) => a+e);
console.log(se,so);
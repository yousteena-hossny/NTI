let names="Ali";
console.log( names.length);

//2
let x="i am learning javascript";
console.log(x.toUpperCase);
console.log(x.toLowerCase);

//3
let email="student@nti.com";
console.log(email.includes("@"));

//4
let word="javascript";
console.log(word[0]);
console.log(word[word.length-1]);

//5
let text="this is a bad day";
console.log(text.replace("bad","good"));

//6
let sentence="i love coding";
let s=sentence.split(" ");
console.log(s);
console.log(s.join("_"));

//7
let txt="nti egypt trainig";
let y =txt.trim().toUpperCase().replace("EGYPT","CAIRO");
console.log(y);

//8
let num="45.8";
let num2=Number(num);
console.log(num2);

//9
let r=7.6;
console.log(Math.round(r),Math.floor(r) ,Math.ceil(r));

//10
console.log(Math.max(12,5,28,9));
console.log(Math.min(12,5,28,9));

//11
let randomnumber=Math.floor(Math.random()*20)+1;
console.log(randomnumber);

//12
 let price=19.4567;
 console.log(price.toFixed(2));

 //13
 let arr=[];
 for(let i=0;i<5;i++){
    let random2=Math.floor(Math.random()*50)+1;
    console.log(random2);
    arr.push(random2);
    
 }console.log(arr);
  let maxno=Math.max(...arr);
  console.log(maxno);
  let minno=Math.min(...arr);
  console.log(minno);
 let sum=0;
 for(let i=0;i<arr.length;i++){
  sum+=arr[i];
 }
 let avg=sum/arr.length;

 console.log("average:",avg.toFixed(2));

 //14
 for(let i=0;i<20;i++){
   console.log(i);
 }

 //15
 for(let i=1;i<=15;i++){
   if(i%2!=0){
console.log("odd no:",i);
   }
 }

 //16
 let i=10
 while(i>=1){
   console.log(i);
   i--;
 }

 //17
 let arrnames=["sara","omar","mona","youssef"];
 for(let name of arrnames){
   console.log(name);
 }

 //18
 for(let i=1;i<=10;i++){
   if(i==7){
   break;}
   else{
      console.log(i);
   }
 }

 //19
 for(let i=1;i<=3;i++){
   for(let j=0;j<=10;j++){
      console.log(`${i}*${j}=${i*j}`);
   }
 }

 //20
 for(let i=1;i<=30;i++){
   if(i%3==0){
      continue;
   }
   else if(i==25){
      break;
   }
   else{
      console.log(i);
   }
 }

 //21
 let words="hello";
 for(letter of words){
   console.log(letter);
 }
 
 //22
 let arrnum=[10,20,30,40];
 let sum3=0;
 for(let i=0;i<arrnum.length;i++){
   sum3+=arrnum[i];
 }console.log("sum=",sum3);

 //23
 let sentence2="javascript is amazing and awesome";
 let count=0;
 for(let i=0;i<sentence2.length;i++){
   if(sentence2[i]=="a"||sentence2[i]=="A"){
      count++;
   }
 }console.log(count);

 //24
 let v =[70,85,92,60,77,88];
 for(let i=0;i<v.length;i++){
   if(v[i]%2==0){
      console.log("even no","[",i,"]",v[i]);
   }
 }

 //25
 for(let i=0;i<5;i++){
   let star="";
   for(let j=0;j<i;j++){
      star+="*";
   }console.log(star);
 }

 //26
 let students1=["ahmed","sara","omar","laila","hassan"];
 let c=0;
 for(let i=0;i<students1.length;i++){
   let upper =students1[i].toUpperCase();
   if(upper.startsWith("A")||upper.startsWith("S")){
      console.log(upper);
      c++;
   }
 }console.log("number of names is",c);
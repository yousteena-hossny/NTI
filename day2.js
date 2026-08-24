//1
for(let i=0;i<10;i++){
console.log(i+1);
}
 //2

 for(let i=2;i<20;i++){
if(i%2==0){
    console.log(i);
}
 }

 //3
  var sum =0
 for(let i=1;i<16;i++){
    sum+=i;
 }console.log("total sales :"+sum);

 //4
 let i=0
 while(i<7){
    console.log(i+1);
    i++;
 }

 //5
 let l=8
while(l>0){
    console.log(l)
    l--;

}

//6
let x=1;
do{
    console.log("welcome"+x)
    x++
}while(x<=5);

//7
var itemincart=10;
while(itemincart<5){
    console.log("cart is empty"); //as the condition is false it didnot enter the loop
};
do {
console.log("cart is empty");// it print the sentence first then check the condition
}while(itemincart<5);

//8
let username="ali";
let userage=22;
let isstudent=true;
console.log(username , typeof username);
console.log(userage , typeof userage);
console.log(isstudent , typeof isstudent);

//9
let dbprice=10;
let inputprice="10";
console.log(dbprice==inputprice); //as it compares value only
console.log(dbprice===inputprice);// as it compares the datatype and value

//10
let name = prompt("please enter your name");
alert(`welcome ${name}`);

//11
let quantity=prompt("enter the number of pieces");
console.log(Number(quantity), typeof Number( quantity));
console.log(+quantity , typeof +quantity);
console.log(parseInt(quantity) , typeof parseInt(quantity));

//12
let a=10;
let b =3;
console.log("sum=" , a+b);
console.log("subtract =",a-b);
console.log("multiply =", a*b);
console.log("division =", a/b);
console.log("power =", a**b);

//13
let age= prompt("enter your age");
if(age<18){
    console.log("you cannot enter");
}else{console.log("you can enter");}

//14
let grade=prompt("enter your grade");
if(grade>=90){
    console.log("A");
}else if(grade>=80){
    console.log("B");
}else if(grade>=70){
    console.log("C");
}else{console.log("F");}

//15

let result=Number(age)>=18?"adult":"minor";
console.log(result);

//16
let day=prompt("what day is today");
switch(day){
    case "sunday":console.log("today is sunday");
    break;
    case "monday":console.log("today is monday ");
    break;
    case "tuesday":console.log("today is tuesday");
    break;
    case "wednesday":console.log("today is wednesday");
    break;
    default :
    console.log("invalid day");
    
}

//17

let price =prompt("enter the price");
for(let i=1 ;i<=10;i++){
    console.log(i*10);
}

//18
let size=prompt("enter the file size");
if(size>0){
    for(let i=0;i< +size;i++){
        console.log(i);
    }
}else {console.log("invalid filesize");}

//19
let begin=prompt("enter the start number");
let end =prompt("enter the end number");
for(let i=+begin ; i<end ;i++){
    if(i%2==0){
        console.log("express" ,i);
    }else{console.log("normal",i);}
}
//20

let student=["ali","maya","ahmed","mona"];
for(let i=0;i<student.length;i++){
    console.log(`student ${i} : ${student[i]}`);
}
//21
let s=0;
for(let i=1;i<=5;i++){
  let b=  prompt(`enter price ${i}`);
s+=b;
}let avg =s/5;
console.log("total =", s);

//22
let correctpin="1234";
let attempt=0;
let pin="";
while(attempt<3){
    pin=prompt("enter your pin");
    attempt++;
    if(correctpin==pin){
        console.log("login successfully");
    }else{console.log("access denied");}
}
//23
let hasaccount=true;
let isverified=false;
console.log(!hasaccount);
console.log(hasaccount&&isverified);
console.log(hasaccount||isverified);
if(hasaccount&&isverified){
    console.log("please verify your account");
}else if(hasaccount||!isverified){
    console.log("welcomeback");
}else{console.log("please sign up");}

//24
var a2=40;
var b2=50;
var c2="60";
var d2=30;
var e2=30;
var total2=a2+b2+ +c2 +d2+e2
console.log(total2);
if(total2<=20){
    for(let i=0; i<20;i++){
        console.log("line"+i);
    }
}else{console.log("too big to print by line");}

//25
let input=prompt("enter a number");
let n=Number(input);
if(n<0){
    console.log("number cannot be negative");
}else {
    let factorial=1;
    for(let i=0;i<n;i++){
        factorial *=i;
    }
    console.log(`${n}!=${factorial}`);
}




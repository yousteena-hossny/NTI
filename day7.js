//part a
//1
function createfun(){
    person="mona";
}
createfun();
console.log(person);// the variable is defined as global variable and th value appears in console

//2
function test(){
    "usestrict";
    try{
        m=10;
    }catch (error){
     console.log(error.message);
    }
}test();//value is undefined as in strict the variale must be declared

//3
/*function test2(){
    "usestrict";
    var localvar="test";
    try{
    delete localvar;}
    catch (error){
    console.log(error.message);
    }
} test2();// error as localvar is defined and cannot be deleted*/

//4
console.log(x);//undefined as var x is hoisted but with undefined value
var x=10;
console.log(x);//10

//5
sayhi();
function sayhi(){
    console.log("hi");
}//the function is completly hoisted


//saybye();
//var saybye =function (){
  //  console.log("bye");

//}//is gives an error

//6
//console.log(a);
//let a=5;
//let is not hoisted so it gives error

//7
var n=1;
function demo(){
    console.log(n);//undefined
    var n=2;
    console.log(n);//2
    
}demo();
console.log(n);//1

//8
function tried(){
    for(var i=0;i<2;i++){
        console.log(i);
    }
}tried();
//console.log("2",i);it gives undified as var is defined in block scope

//9
let valid=true;
if(valid){
    let x=10;
    const y=10;
}//console.log(x,y); it gives an error as they are defined in block scope

//10
var e1=3;
var e1=4;
console.log("e1",e1);
let e2=3;
//let e2=5; var can be redeclared

//11
const student={
    name:"hana",
    age:10,
    city: "cairo"
}
student.age=20;
student.grade="A";
delete student.city;
console.log(student);

//const student={
  //  name:"mona",
    //age:13} gives error 
//console.log(student);

//12
const nums=[1,2,3];
nums.push(7);
nums[0]=8;
//const nums=[5,8,9];//error

//13 const must have a value

//14
var g1="var global";
let g2 ="let global";
const g3="const global";
console.log("window. g1", window.g1); // global variable
console.log("window.g2",window.g2);//undefined
console.log(window.g3);//undefined

//15

//16
const welcome=(name)=> `welcome,${name}!`;
console.log(welcome("ali"));

//17
let fullinfo=(first,last,age)=>`${first} ${last} is ${age} years`;
console.log(fullinfo("ali","hassan","25"));

//18
const multiply=(a,b)=>a*b;
console.log(multiply(5,3));
const add=(a,b)=>{
console.log(a);
console.log(b);
return a+b;
}
console.log(add(3,4));

//19
const product ={
    title:"laptop",
    price:1500,
    instock: true,
    brand:"dell"
};
const{title,price,instock,brand}=product;
console.log(title,price,instock);

//20
let arr=["html","css","js","react"];
let n3=arr[0];
let n2=arr[1];
console.log(n3,n2);

//21
function greet(name="guest",message="hello"){
    return message+" "+name;
}
 
console.log( greet("tony","hi"));
console.log(greet("tony"));
console.log(greet());

//22
function sumall(...numbers){
    
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(sumall(1,2,3));
console.log(sumall(10,20,30));

//23
const origin=[10,20,30];
const copyarray=[...origin];
copyarray.push(40);
console.log(origin);
console.log(copyarray);

//24
const user={name:"sara",age:22};
const contact ={email:"sara@nti.com",age:23};
const merge={...user,...contact};
console.log(merge);

//25
const values =[2,4,6,8];
function total(a,b,c,d){
    return a+b+c+d;
}console.log(total(...values));

//26
let person1={name:"ali",child:{age:5}};
let person2=person1;
person2.name="omar";
console.log(person1.name);//omar because they both reference to the same object in memory not a new copy

//27
const original={
    name:"mona",
    details:{city:"cairo"}
};
const origin2={...original};
origin2.name="maria";
origin2.details.city="alex";
console.log(original);
console.log(origin2);//as it takes a shallow copy so the name only is copied and is not affected in the original one 

//28
const original3={
    name:"mona",
    details:{city:"cairo"}
};
const deepcopy=structuredClone(original);//it takes a copy of every thing even nested objects
deepcopy.details.city="giza";
console.log(original3);
console.log(deepcopy);

//30
const app_config={
    name:"myapp",
    version :"1.0",
    api:{
        baseurl:"https://api.example.com",
        timeout:5000
    },
    features:["auth"]
};
app_config.api.timeout=3000;
app_config.features.push("dark_mode");
console.log(app_config);
try{
    app_config={};
}catch(error){
    console.error(error.message);
}


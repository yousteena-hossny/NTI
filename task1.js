//1
console.log("js is running successfully");
//2
window.alert("ready to practice!");
//3
let productname ="laptop";
let price =15000;
let isAvailable =true;
console.log(productname +" "+ typeof productname);
console.log(price +" "+typeof price);
console.log(isAvailable+" "+ typeof isAvailable);
//4
document.getElementById("maintitle").innerText="practice Time";
//5
let city="cairo";
let country ="egypt";
console.log(city+","+country);
//6
console.log(`location: ${city} , ${country}`);
//7
let itemprice=120;
let quantity=3;
let total =itemprice*quantity;
console.log( total + 400-(total))
//8
let color=prompt("what is your favourite color?");
console.log(`your favourite color is ${color}`);

//9

let score = 20;
let textscore ="20";
 console.log(score==textscore);// loose it compares according to the value and not the datatype so it is true
 console.log(score===textscore);// strict it compares according to the value and the datatype so the result is false as first one is number and the other one is string

 //10
let value = prompt("enter the quantity");
let first=Number(value); 
console.log(typeof first);
let second = parseInt(value);
console.log(typeof second)
let third= +value;
console.log(typeof third);

//11
let fruits=["mango","banana","apple"];
console.log("second element is"+ fruits[1]);
fruits[1]="orange";
fruits.push("grape");
console.log(fruits);

//12
let course ={
    level :1,
    hours : 3,
    title : "js"
}
course.title= "cpp" ;
console.log(course);

//13
let hasaccount =true;
let isverified = false;
 
console.log(hasaccount&&isverified);
console.log (hasaccount || isverified);
console.log(isverified);

//14

let balance =50;
balance+=30;
balance*=2;
balance -=20;
console.log(balance);

//15

let hotelname =prompt("enter the name of the hotel");
let days= prompt("how many nights you want to book?");
let verify =confirm("are you sure you want to confirm the booking?");
console.log(`hotel: ${hotelname} , Nights:${days} , Confirmed :${verify}`);

//16
console.log(2+ 8 +"0");//100
console.log("2"+8+0);//280
console.log(2+"8"+0);//280

//17

var city1 ="alex";
var city2=city1;
city2 ="giza";
console.log(city1,city2);// alex , giza city2 in the second line is equal to the value of city1 
// but in the the 3rd line it has chnged into giza 
var car1 ={brand:"toyota"};
var car2 = car1;
car2.brand="Honda";
console.log(car1,car2);//honda ,honda as in the 3rd brand of car2 has chanded into honda and as they both point to the same object in memory
let car2object= Object.assign(car1,{brand:"honda"});
console.log(car2object); 

//18
let obj={color:"blue"};
let mixedbag=[true,"apple",4,null, undefined,obj ];
for(let i=0; i<mixedbag.length;i++){
    console.log(typeof mixedbag[i]);
}

//19

let names=prompt("enter your name");
let orderprice=prompt("what is the price of the order?");
let confirmorder=confirm("confirm payment");
letorderprice2=Number(orderprice)
console.log(`name:${names} price:${orderprice2} confirmed: ${confirmorder}`);
alert(`name:${names} price:${orderprice2} confirmed: ${confirmorder}`);
document.getElementById("result").innerText=`name:${names} price:${orderprice2} confirmed: ${confirmorder}`;

//20
let number1=prompt("enter number1");
let number2=prompt("enter number2");
let number1change=Number(number1);
let number2change=Number(number2);
let sum= number1change+ number2change;
let diff= number1change -number2change;
let product=number1change* number2change;
let dividion =number1change/number2change;
let power=number1change ** number2change ;
let modulus = number1change %number2change;
console.log(sum +" "+diff+" "+product+" "+dividion+" "+modulus+" "+power);

//21
var a=40;
var b=50;
var c="60";
var d = 30;
var e = 30;
console.log(a+b + +c+d+e);// as c is string not number so we must change it into number 

//24

var a1="15";
var b1=15;
var c1=null;
var d1;
var e1=[15];
var f1 ={value:15};
let arr=[a1,b1,c1,d1,e1,f1];
for(let i=0;i<arr.length;i++){
    console.log(arr[i] + typeof arr[i] +arr[i]==15+ arr[i]===15 );
}


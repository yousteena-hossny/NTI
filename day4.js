//1
const car={
    brand:"bmw",
    model:"x6",
    year:"2026",
    color:"white"
};
console.log(car);

//2
console.log(car.brand);
console.log(car["year"]);

//3
car.color="black";
car.price=1000000;
console.log("car after editing",car);

//4
delete car.year;
console.log(car.year);//undefined as year is not found in car object 

//5
const student={
    "student-name":"sara",
    age:20
};
console.log("student object",student["student-name"]);

//6
const book={
    title:"harry potter",
    author:{
        firstname:"j.k",
        lastname:"rowling"

    }
};
console.log(book.author.lastname);

//7
const person={
    name:"ali",
    age:25,
    city:"cairo"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));

//8
const settings={
    theme:"dark",
    lang:"en",

};
Object.freeze(settings);
settings.theme="light";
settings.fontsize=16;
console.log(settings);

//9
let city=["cairo","alex","paris","london","aswan"];
console.log(city ,city.length);

//10
console.log(city[0],city[1],city[length-1]);

//11
city.push("luxor");
city.unshift("giza");
console.log("city arr after editing",city);

//12
city.pop();
city.shift();
console.log("city arr after deleting",city);

//13
let programming=["html","css","js","react"];
console.log(programming.includes("python"));

//14
let arr2=["pen","book","bag"];
console.log(arr2[0],arr2.indexOf("pen"));
console.log(arr2[1],arr2.indexOf("book"));
console.log(arr2[2],arr2.indexOf("bag"));

//15
let color=["red","green","blue","yellow"];
for(let item of color){
    if(item=="blue"){break;}
    console.log(item);
    
}

//16
let alphabet=["A","B","C"];
alphabet.push("D");
alphabet.push("E");
alphabet.shift();
console.log(alphabet,alphabet.length);

//17
let fruits=["apple","banana","cherry"];
let upperfruits=fruits.map(function(fruits){
    return fruits.toUpperCase();
});
console.log(upperfruits);
console.log(fruits);

//18
let numbers=["10","55","30","80","45","90"];
let result=numbers.filter(num => num>50
);
console.log(result);
//19
let cities=["cairo","giza","alex","aswan"];
let result2=cities.find(element=>element.startsWith("a"))
let index=cities.findIndex(element=>element.startsWith("A"));
console.log(index);
console.log(result2);

//20
let letters=["a","b","c","d","e"];
let copy=letters.splice(0,4);
console.log(copy);

//21
let numbers2=["one","two","three","four","five"];
let after=numbers2.splice(1,2);
console.log(after);
console.log(numbers2);

//22
let beforesort=[20,100,1,5,25];
let aftersort=beforesort.sort((a,b)=>a - b);
console.log(aftersort);

//23
let ages=[16,21,17,19];
let someages=ages.some(age=>age>=18);
let everyages=ages.every(age=>age>=18);
console.log(someages);
console.log(everyages);

//24
let calc=[5,10,15,20];
let calcresult=calc.reduce((acc,x)=>acc+x,0);
console.log(calcresult);

//25
let studentarr=[{name:"omar",grad:80},
{name:"mona",grad:"90"},
{name:"ali",grad:70}
];
for(let student of studentarr){
    console.log(student);
}

//26
let studentedit =studentarr.filter(e=>e.grad>=80).map(e=>e.name);
console.log(studentedit);

//27
let objectarr=[{name:"mobile",price:10000},{name:"tablet",price:15000},{name:"ipad",price:30000}];
let reduceobj=objectarr.reduce((acc,c)=>acc+c.price,0);
console.log(reduceobj);

//28
let lang=["js","html","css","js","js"];
let count =lang.filter(e=>e=="js").length;
console.log(count);

//29
let classroom={
    teacher:"mona",
    student:["omar","sara","maria"]
};
console.log(classroom.teacher);
console.log(classroom.student.length);













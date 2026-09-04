let getook=document.getElementById("getbook");
let addbook=document.getElementById("addbook");
let putbook=document.getElementById("putbook");
let deletebook=document.getElementById("delete book");
let deleteid=document.getElementById("deleteid").value ;

let URL="";
const xhr =new XMLHttpRequest();
xhr.open("GET",URL);
console.log("readystate",xhr.readyState);
 xhr.addEventListener("readystatechange",()=>{
 if (xhr.readyState === 2) {
    console.log("    Headers received. status =", xhr.status, xhr.statusText);
  }
if(xhr.readyState===4){
    console.log("request finished and status is",xhr.status);
    
}
if(xhr.status>200 &&xhr.status<300){
    console.log("success", xhr.response);
    
}
const book=JSON.parse(xhr.response);
for(let i=0;i<5;i++){
    let books=document.createElement("div");
    books.innerHTML="${book}";
}

 });
 xhr.send();

 let xhr2=new XMLHttpRequest();
 xhr2.open("DELETE",URL);
  xhr2.addEventListener("readystatechange",()=>{
if(xhr.status>200 &&xhr.status<300){
    console.log("success", xhr.response);
    
}
let mess=document.createElement("small");
mess.textContent="book"+deleteid+"deleted successfully";



  });
  xhr2.send();

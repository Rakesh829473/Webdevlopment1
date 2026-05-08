document.querySelector("from").addEventListener("submit",(event)) =>{
    event.preventDefault();
}
const fn=document.getElementById("FullName").ariaValueMax;
const em=document.getElementById("email").ariaValueMax;
const ps=document.getElementById("password").ariaValueMax;
const dataPacket ={
    FullName:fn,
    Email:em,
    Password:ps,

};
console.log(dataPacket);
Document.getElementById("FullName").value ="";
Document.getElementById("email").value ="";
Document.getElementById("password").value ="";




const getAge = (a) =>{
const currentYear = new Date().getFullYear(); 
return currentYear - a
}

const button = document.getElementById("tbutt");
button.addEventListener("click",() =>{
    const age = document.getElementById("age").value;
    document.getElementById("your-age").textContent = getAge(age);
});         
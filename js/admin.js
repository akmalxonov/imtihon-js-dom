const formElement = document.getElementById("form")
const errorDivElement = document.getElementById("error")
const errorTextElement = document.getElementById("error-text")
const animationElement = document.querySelector(".lds-ellipsis")
formElement.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const form = new FormData(e.target)
    try{
        const res = await fetch("http://localhost:5000/products",{
            method:"POST",
            body:form
        })
        console.log(res.status);
        const data = await res.json()
        if(res.status === 201){
            alert("success"+data?.message)
            errorDivElement.style.opacity = 99;
            errorDivElement.style.background = "green";
            errorTextElement.textContent = "Muvofaqiyatli boldi",data?.message;
            alert(data?.message)
        }else{
            errorDivElement.style.opacity = 99;
            errorTextElement.textContent = "Nimadur hato Qaytadan urinib korin";
        }
    }catch(err){
        console.log(err);
    }
})

const nameInForm = document.getElementById('name');
const messageInForm = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener ('submit', (e)=>{
    let messages=[]
    if (nameInForm.value=== 'Amar Ismic'){
        
        messages.push("You can't use my name :D")
    }

    if (messageInForm.value.length<5){
        
        messages.push('Your message is too short, please, feel free to write me a longer message. Minimum is 5 characters')
    }

    if (messageInForm.value.length>150){
        
        messages.push('Whoaaaa, hold on. I dont have that much time to read it. Please keep it under 150 characters')
    }

    if (messageInForm.value === "Hello"){
        
        messages.push('Hi! Feel free to send me a message, not just hello')
    }


    if (messages.length >0){
        e.preventDefault()
        errorElement.innerText=messages.join(".......")
    }
})
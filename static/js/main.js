function showPassword(){
    let icon = document.getElementById("passwordIcon");
    if (icon.classList == "fas fa-lock-open"){
        icon.className = "fas fa-lock";
    }
    else{
        icon.className = "fas fa-lock-open";  
    }
    
    let label = document.getElementById("passwordTextbox");
    if(label.type == "password"){
        label.type = "text";
    }
    else{
        label.type = "password";
    }
}

function blurPassword(){
    let textbox = document.getElementById("passwordTextbox");

    if(textbox.value.length != 0){
        let label = document.getElementById("passwordLabel");
        label.style.cursor = 'text';
        label.style.top = '-65px';
        label.style.color = '#0956F0';
    }
}

function blurEmail(){
    let textbox = document.getElementById("emailTextbox");

    if(textbox.value.length != 0){
        let label = document.getElementById("emailLabel");
        label.style.cursor = 'text';
        label.style.top = '-65px';
        label.style.color = '#0956F0';
    }
}
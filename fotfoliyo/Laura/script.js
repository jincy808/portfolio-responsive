var nameError= document.getElementById('name-error')
var emailError= document.getElementById('email-error')
var subError= document.getElementById('sub-error')
var msgError= document.getElementById('msg-error')
var submitError= document.getElementById('submit-error')
// name validation

function validatename(){
    var Name=document.getElementById('name').value
    if(Name.length == 0){
        nameError.innerHTML='name is required'
        return false;
    }
    if(!Name.match(/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/)){
        nameError.innerHTML='Write full name'
        return false;
    }
    nameError.innerHTML='✅'
    return true
}

// email validation

function validateemail(){
    var Email=document.getElementById('email').value
    if(Email.length == 0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!Email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Email Inavlid'
        return false;
    }
    emailError.innerHTML='✅'
    return true



}

// subject validation
function validatesub(){
    var Subject=document.getElementById('subject').value
    var required=10
    var left = required-Subject.length

    if(left > 0){
        subError.innerHTML= left + "more characters requried"
        return false
    }
    subError.innerHTML='✅'
    return true
}


// message validation
function validatemsg(){
    var Message=document.getElementById('message').value
    var required2=50
    var left2 = required2-Message.length

    if(left2 > 0){
        msgError.innerHTML= left2 + "more characters requried"
        return false
    }
    msgError.innerHTML='✅'
    return true
}


// button validation
function vlidateform(){
if(!validatename() || !validatemsg() ||! validatemsg() ||! validatesub()){
    submitError.style.display='block'
    submitError.innerHTML='please fill all the field'
    setTimeout(function(){submitError.style.display='none'},3000)
    return false
}
}

console.log(vlidateform())

function validate(){ 
    var userName = document.forms["registration"]["name"];
    var pass = document.forms["registration"]["password"];
    var cpass = document.forms["registration"]["retype_password"];
    let select_country = document.forms["registration"]["country"];
    var terms = document.forms["registration"]["terms"];
    var btn = document.getElementById("button")
    
    if(userName.value == "" && pass.value < 10 && cpass.value != pass.value && select_country.selectedIndex < 1 && terms.checked == false ){
        btn.disabled = false;
    }
    else{
        btn.disable = true; 
    }

    if (userName.value == "") {
        window.alert("Please enter your User name.");
        userName.focus();
        return false;
    }
    else{
        btn.disabled = false;
    }
    if (pass.value < 10 ){
        window.alert("pass must be atleast 10 characters");
        pass.focus();
        return fasle;
    }
     if(cpass.value != pass.value ){
        window.alert("Passwords do not match");
        return fasle;
    
    }
    if (select_country.selectedIndex < 1 ){
        window.alert("Please select your country.");
        select_country.focus();
        return false;
    }	
    if (terms.checked == false ){
        window.alert("Please Agree to our terms and conditions.");
        terms.focus();
        return false;
        
    }
    
        document.getElementById('display').innerHTML= "Welcome "+ userName.value +"!" + "The country code you selected is "+ select_country.value + ".";
        
    
    
    
    
}
function showElement(){
    
}
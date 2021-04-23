function Login(){
    event.preventDefault();
    let mobile=document.querySelector("#mobile").value; //Gets Mobile Number Value
    let pass=document.querySelector("#pass").value;     //Gets Password Value
    //checks mobile Number and Password    
    if((mobile.length < 10)&&(pass.length < 8)) {
        document.getElementById("login").innerHTML="Invalid Mobile Number and Password";
    }
    //checks password length
    else if(pass.length < 8) {
    document.getElementById("login").innerHTML="Invalid Password";
    }
    //checks mobile number Length
    else if((mobile.length < 10) || (mobile.length > 10))
    {        document.getElementById("login").innerHTML="Invalid Mobile Number";
    }
    else{
        alert("Login Success");
        document.getElementById("login").innerHTML="Login Succesful";
        window.location.href="CabDetails.html";                    
    }
    
}
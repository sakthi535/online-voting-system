function signin()
{
    var signinError = document.getElementById('errorSignin');

    //for Aadhar Number
    var aadhar = document.forms["sform"]["aadhar"].value;
    

    //for Username/Mobile
    var mobile = document.forms["sform"]["mobile"].value;
    

    //for Password
    var passwd = document.forms["sform"]["passwd"].value;
    
    if(aadhar==987654321032 && mobile==9876543210 && passwd==9876541){
        return true
    }
    else{
        signinError.innerHTML="Invalid Credentials, Try Again!";
        signinError.style.display="block";
        return false;
    }
    
}

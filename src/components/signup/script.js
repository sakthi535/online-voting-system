function signup()
{
    
    //for Aadhar Number
    var aadhar = document.forms["sform"]["aadhar"].value;
    var errorsAadhar = document.getElementById('aadharError');

    //for Username/Mobile
    var mobile = document.forms["sform"]["mobile"].value;
    var errorsMobile = document.getElementById('mobileError');
    var errorsEmail = document.getElementById('mailError');

    //for email
    var email = document.forms["sform"]["mail"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.indexOf(".");
    
    //for password
    var passwd1 = document.forms["sform"]["passwd1"].value;
    var errorsPasswd1 = document.getElementById("passwdErr1");

    // for Confirm Passoword
    var passwd2 = document.forms["sform"]["passwd2"].value;
    var errorsPasswd2 = document.getElementById("passwdErr2");

    if(aadhar==null || aadhar=="" || aadhar.length>12 || aadhar.length<12){
        errorsAadhar.innerHTML="Invalid Aadhar Number";
        errorsAadhar.style.display="block";
        return false;
    }
    else if(mobile==null || mobile=="" || mobile.length<10){
        errorsMobile.innerHTML="Username/Mobile Number must be of minimum 10 characters";
        errorsAadhar.style.display="none";
        errorsMobile.style.display="block";
        return false;
       
    }
    else if(email=="null" || email=="" || atpos<1 || dotpos<atpos+2 || dotpos+2>email.length){
        errorsEmail.innerHTML="Please enter a valid mail Id";
        errorsEmail.style.display="block";
        errorsAadhar.style.display="none";
        errorsMobile.style.display="none";
        return false;
    }
    else if(passwd1==null || passwd1=="" || passwd1.length<6){
        errorsPasswd1.innerHTML="Password must cantain minimum 6 characters";
        errorsPasswd1.style.display="block";
        errorsAadhar.style.display="none";
        errorsMobile.style.display="none";
        errorsEmail.style.display="none";
        return false;
    }
    else if(passwd2.match(passwd1)){
        return true;
    }
    else{
        errorsPasswd2.innerHTML="Passwords do not match Try again!";
        errorsPasswd2.style.display="block";
        errorsAadhar.style.display="none";
        errorsMobile.style.display="none";
        errorsEmail.style.display="none";
        errorsPasswd1.style.display="none";
        return false;
    }
    

}
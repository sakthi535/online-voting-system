function signin()
{
    //for Aadhar Number
    var aadhar = document.forms["sform"]["aadhar"].value;
    var errorsAadhar = document.getElementById('aadharError');

    //for Username/Mobile
    var mobile = document.forms["sform"]["mobile"].value;
    var errorsMobile = document.getElementById('mobileError');

    //for Password
    var passwd = document.forms["sform"]["passwd"].value;
    var errorsPasswd = document.getElementById('passwdError');
    if(aadhar==null || aadhar=="" || aadhar.length>12 || aadhar.length<12){
        errorsAadhar.innerHTML="Invalid Aadhar Number";
        errorsAadhar.style.display="block";
        return false;
    }
    else if(mobile==null || mobile=="" || mobile.length<10){
        errorsMobile.innerHTML="Username/Mobile Number must be of minimum 10 characters";
        errorsMobile.style.display="block";
        return false;
       
    }
    else if(passwd==null || passwd=="" || passwd.length<6){
        errorsPasswd.innerHTML="Password must cantain minimum 6 characters";
        errorsPasswd.style.display="block";
        return false;
    }
    return true;
    
}

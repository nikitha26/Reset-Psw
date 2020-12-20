function Resetpsw(){ 
    var psw = document.getElementById("password").value;
    var reset = document.getElementById("resetpsw").value; 
    
    //Check given psw length and only letters
    if(psw.length < 8 && !/^[a-zA-Z]*$/g.test(psw)){
        document.getElementById("error1").innerHTML="Enter atleast 8 letters and Enter only letters"
    }
    //Check psw letters or digits
    else if(!/^[a-zA-Z]*$/g.test(psw)){
            document.getElementById("error1").innerHTML="Enter only letters"
    }
    //Check psw length
    else if(psw.length < 8){
        document.getElementById("error1").innerHTML="Enter atleast 8 letters"
    }

    else{
        document.getElementById("valid").innerHTML="Valid input"
    }

    //Check psw match or not
    if(psw !== reset){
        document.getElementById("error2").innerHTML="Password do not match";
     }
     else{
         document.getElementById("validpsw").innerHTML="Match password"
     }

}
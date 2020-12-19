function Resetpsw(){ 
    var psw = document.getElementById("password").value;
    var reset = document.getElementById("resetpsw").value;     
    // console.log(psw + " hi "+reset)
    if(psw !== reset){
       document.getElementById("error").innerHTML="Do not match";
    }
    if(psw.length <= 8){
        console.log(psw.length)
        console.log("Have error")
    }

}
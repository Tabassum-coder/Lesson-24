function validate(){
    
    const email = document.getElementById("txtuser").value;
    const pwd=document.getElementById("txtpass").value;
    const msgbox=document.getElementById("msg");
     if(email===''){
        message="Please enter username";
        msgbox.style.color='red';
     }
     else if(pwd===''){
        message="Please enter password";
        msgbox.style.color='red';
     }
     else{
        message="Login Successful!";
        msgbox.style.color='green';
     }
     msgbox.innerText=message;
     
    
}
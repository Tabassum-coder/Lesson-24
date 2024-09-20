function validate(){
    const user = document.getElementById("txtuser").value;
    const pwd = document.getElementById("txtpwd").value;
    var msgbox=document.getElementById("msg");
    let message='';
    if(user==''){
        message="Please enter username";
        msgbox.style.color='red';
    }
    else if(pwd===''){
        message="Please enter the password";
        msgbox.style.color = 'red';
    }
    else{
        message="Login Successful!";
        msgbox.style.color = 'green';
    }
    msgbox.innerText=message;
    
}
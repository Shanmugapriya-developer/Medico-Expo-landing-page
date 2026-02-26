document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let msg=document.getElementById("msg");
    if (name === "" || mobile ===""){msg.innerText="Please fill all fields";
        msg.style.color ="red";
        return;
    }
    if(mobile.length !==10){
        msg.innerText="Mobile number must be 10 digits";
        msg.style.color ="red";
        return;
    }
    alert("Registration Successful!");
    msg.innerText="Registration Successful!";
    msg.style.color ="green";
    
});

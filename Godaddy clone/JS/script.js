var para1=document.getElementById("para1");
var calldropmaincontainer=document.getElementById("calldropmaincontainer");
var para3=document.getElementById("para3")
var loginsignup=document.getElementById("loginsignup");
var bodycolor=document.getElementById("bodycolor");
var markclose=document.getElementById("markclose");
var logonavbar=document.getElementById("logonavbar");
var registerusers=document.getElementById("registerusers");

para1.addEventListener("click",function(){
  
    if(calldropmaincontainer.style.display==="block"){
       
        calldropmaincontainer.style.display="none";
        // calldropmaincontainer.style.backgroundColor="white"
    

    }
    else{
       
        calldropmaincontainer.style.display="block";
        // calldropmaincontainer.style.backgroundColor="white";
    }
    // if(registerusers.style.display==="block"){
    //     registerusers.style.display="none";
       
    // }
    // else{
    //     registerusers.style.display="block";
        
    // }
    
})

para3.addEventListener("click",function(){
    if(registerusers.style.display==="block"){
        registerusers.style.display="none";
        // para3.style.backgroundColor="#767676"
        para3.style.backgroundColor="#2b2b2b"
        para3.style.color="white"
       
    }
    else{
        registerusers.style.display="block";
        para3.style.backgroundColor="white"
        para3.style.color="black"
    }
    
   
})

// bodycolor.style.backgroundColor="black"

markclose.addEventListener("click",function(){
    if(loginsignup.style.display==="block"){
        loginsignup.style.display="none";
       
    }
    else{
        loginsignup.style.display="block";
        
    }
})

function myfunction(){
    if(loginsignup.style.display==="block"){
        loginsignup.style.display="none";
       
    }
    else{
        loginsignup.style.display="block";
        
    }
    if(registerusers.style.display==="block"){
        registerusers.style.display="none";
       
    }
    else{
        registerusers.style.display="block";

        
    }
}
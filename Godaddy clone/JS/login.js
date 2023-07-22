var starts=document.getElementById("staer");
var usercus=document.getElementById("usercus");
var show=document.getElementById("show");
show.textContent="Show"
var hide=document.getElementById("hide");
hide.textContent="hide"
var userpass=document.getElementById("userpass").value;
show.addEventListener("click",()=>{
  
    var show=document.getElementById("show");
    var hide=document.getElementById("hide");
    var x=document.getElementById("userpass");
    if(show.style.display==="none"){
        hide.style.display="inline-block";
        show.style.display="none"
       
    }
    else{
        hide.style.display="inline-block";
        show.style.display="none"
       
    }
    if(x.type==="password"){
            x.type="text"
        }
        else{
            x.type="password"
        }
        
})
hide.addEventListener("click",()=>{
    var show=document.getElementById("show");
    var x=document.getElementById("userpass");
    var hide=document.getElementById("hide");
    if(show.style.display==="inline-block"){
        hide.style.display="inline-block";
        show.style.display="none"
       
    }
    else{
        hide.style.display="none";
        show.style.display="inline-block"
       
    }
    if(x.type==="password"){
        x.type="text"
    }
    else{
        x.type="password"
    }
})

// function myfunctionshow(){
//     var x=document.getElementById("userpass");
//     var show=document.getElementById("show");
//     var hide=document.getElementById("hide");

//     if(show.style.display==="inline-block"){
//         hide.style.display="inline-block";
//         show.style.display="none"
       
//     }
//     else{
//         hide.style.display="none";
//         show.style.display="inline-block"
       
//     }
   
// if(x.type==="password"){
//     x.type="text"
// }
// else{
//     x.type="password"
// }
// }
// function myfunctionhide(){
//     var x=document.getElementById("userpass");
//     var show=document.getElementById("show");
//     var hide=document.getElementById("hide");

//     if(show.style.display==="inline-block"){
//         hide.style.display="inline-block";
//         show.style.display="none"
       
//     }
//     else{
//         hide.style.display="none";
//         show.style.display="inline-block"
       
//     }
// if(x.type==="password"){
//     x.type="text"
// }
// else{
//     x.type="password"
// }
// }

















var form=document.getElementById("form");

form.addEventListener("submit",(l)=>{
    l.preventDefault();
})
function myfunction1(){
var cv=document.getElementById("prashanth");
var usercus=document.getElementById("usercus");
var lol=document.getElementById("passlabeltext");
    // cv.style.fontSize="14px";
    cv.style.scale="0.9"
    cv.style.fontSize="14px"
    cv.style.position="relative";
    cv.style.top="-10px"
    cv.style.transition="0.2s"
    // cv.style.marginTop="-80px"
    // cv.style.marginLeft="80px"
    // cv.style.marginTop="10px"
    // cv.style.backgroundColor="red"

    // lol.style.scale="0.9"
    // lol.style.fontSize="19px"
    // lol.style.position="relative";
    // lol.style.top="-10px"
    // lol.style.transition="0.2s"
    
   
}

function myfunction2(){
    var lol=document.getElementById("passlabeltext");
    var userpasss=document.getElementById("userpass").value;
    var usernameerr=document.getElementById("usercus").value
    var errormsg=document.getElementById("errormsg")
    var cv=document.getElementById("prashanth");
    // lol.style.fontSize="14px";

        lol.style.scale="0.9"
        lol.style.fontSize="14px"
        lol.style.position="relative";
        lol.style.top="-10px"
        lol.style.transition="0.2s"
        
        // cv.style.scale="0.9"
    cv.style.fontSize="24px"
    // cv.style.position="relative";
    cv.style.top="5px"
        // cv.style.backgroundColor="red"
     
       if(usernameerr==""){
        errormsg.textContent="*Please Provide Username"
        errormsg.style.color="red";
       
       
    }
       else{
        errormsg.textContent=" "
        cv.style.fontSize="14px"
        cv.style.scale="0.9"
        cv.style.position="relative";
        cv.style.top="-10px"
        cv.style.transition="0.2s"
       }
    }

    var signupsub=document.querySelector("signibtn")
    signupsub.addEventListener("submit",()=>{
        alert("fnewkbn")
    })
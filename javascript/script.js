let pass = document.getElementById("pass");
let mess = document.getElementById("message");
let str = document.getElementById("strength");
let con = document.getElementsByClassName("container");
let check = document.getElementById("Checker");
pass.addEventListener("input",()=>{
  // if(pass.value.length > 0){
  //   mess.style.display = "block";
  // }else(pass.value.length < 0)
  // {
  //   mess.style.display = "none";
  // }
  if(pass.value.length < 4){
    str.innerHTML = "Password is Weak";
    str.style.color = "orange";
    pass.style.borderColor = "orange";
    con.style.borderColor = "orange";
  }
  else if(pass.value.length >= 4 && pass.value.length < 8)
  {
    str.innerHTML = "Password is Medium";
    str.style.color = "red";
    pass.style.borderColor = "red";
    con.style.borderColor = "red";

  }
  else if(pass.value.length >= 8){
    str.innerHTML = "Password is Strong";
    str.style.color = "green";
    pass.style.borderColor = "green";
    con.style.borderColor = "green";

  }
});

check.onclick = function(){
  if(pass.type == "password"){
    pass.type = "text";
  }
  else{
    pass.type = "password";
  }
}



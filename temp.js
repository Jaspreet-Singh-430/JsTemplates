function sub() {
    reg1 = /[A-Za-z]/;
    reg2 = /[0-9]/;
    let em = email.value;
    let pw = pwd.value;
    if (em == "" || pw == "")
      span.innerText = "credentials are not valid. Try Again!";
    else if (
      em.includes("@") == "false" ||
      em.includes(".") == "false" ||
      em.indexOf("@") > em.indexOf(".")
    )
      span.innerText = "email is not correct!";
    else if (
      pw.length < 8 ||
      reg1.test(pw) == false ||
      reg2.test(pw) == false
    )
      span.innerText = "password is not correct!";
    else {
      span.style.color = "green";
      span.innerText = "Success";
    }
  }
  btn.onclick = function () {
    if (pwd.getAttribute("type") == "password")
      pwd.setAttribute("type", "text");
    else pwd.setAttribute("type", "password");
  };
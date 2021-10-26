function validEmail() {
  var mail = document.querySelector(".firstoftype").value;
  var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  var errorMessage = document.querySelector(".span1");
  if (mail.match(email)) {
    alert("Your Email : " + mail);
  } else {
    errorMessage.style.display = "block";
  }
}
function validEmail1() {
  let mail = document.querySelector(".secondoftype").value;
  let email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  var errorMessage2 = document.querySelector(".span2");
  if (mail.match(email)) {
    alert("Your Email : " + mail);
  } else {
    errorMessage2.style.display = "block";
  }
}

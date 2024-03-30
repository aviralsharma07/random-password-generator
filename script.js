const password = document.getElementById("password");

function getRandomPassword() {
  var length = 8;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var pwd = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    pwd += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(pwd);
  password.value = pwd;
}

function copyPassword() {
  password.select();
  document.execCommand("copy");
}

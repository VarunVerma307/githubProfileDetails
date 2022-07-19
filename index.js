var user = document.getElementById('username');
var login2 = document.getElementById('login');
var id2 = document.getElementById('id');
var followers2 = document.getElementById('followers');
var location2 = document.getElementById('location');
var following2 = document.getElementById('following');
console.log("js onload");
var btn = document.getElementById('button');
btn.addEventListener('click', function () {
  var githubname = user.value;
  // var display;
  console.log("btn");
  axios.get(`https://api.github.com/users/${githubname}`)
    .then(function (response) {
      console.log(response);
      login2.innerText = response.data.login;
      id2.innerText = response.data.id;
      location2.innerText = response.data.location;
      followers2.innertext = response.data.followers;
      following2.innertext = response.data.following;
    })
    .catch(function (error) {
      console.log(error);
    })

})
let a = 1;

function show() {

  if (a == 1) {
    document.getElementById("display").style.display = "block";
  }
}

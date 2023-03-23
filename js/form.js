let form = document.querySelectorAll("#user-form input")
let user = {}


form.forEach((field) => {
    field.addEventListener("keyup", (event) => {
      let property = event.target.name;
      let value = event.target.value;
      user[property] = value;
      console.log(user); 
    });
  });

  const logUser = () => {
    let {Email, Password} = user
    Email && Password ? (localStorage.setItem("token", "userComplete"), window.open("./home.html", "self")) : ("llenar formulario")
  }

  document.getElementById("btn").addEventListener("click", (logUser))
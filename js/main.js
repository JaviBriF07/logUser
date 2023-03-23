const valueUser = () => {
    let token = localStorage.getItem("token")
    token ? window.open("./views/home.html", "_self") : window.open("./views/logIn.html", "_self")
}
valueUser()
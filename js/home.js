

const getOut = () => {
    localStorage.removeItem("token")
     window.open("../index.html", "self")
}


document.getElementById("remove").addEventListener("click", (getOut))
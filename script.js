function saveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mess = document.getElementById("mess").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("mess",mess);
}

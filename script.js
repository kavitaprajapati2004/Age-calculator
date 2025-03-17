function Agecalculator(){
    let username = document.getElementById("username").value;
    let dateOfBirth = document.getElementById("DOB").value;
    let nameElement = document.getElementById("name");
    let demo = document.getElementById("demo");

    if(username === "" || dateOfBirth ===""){
        alert("Sorry! please enter userName and Date of Birth both");
        return;
    }
    let todayDate = new Date().getFullYear();
    let userbirthdate = new Date(dateOfBirth).getFullYear();

    let userAge = todayDate - userbirthdate;
    
    nameElement.innerText = username;
    demo.innerText = `Your age is ${userAge} Years.`;

}


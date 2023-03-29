function eco(){
    var txt1=document.getElementById("txt").value;
    var btnn=document.getElementById("btn");
     localStorage.setItem("name",txt1);
     alert(localStorage.getItem("name",txt1));
}
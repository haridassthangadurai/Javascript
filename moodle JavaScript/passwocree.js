function boom(){
    var user = document.getElementById("txt").value;
    var dob =document.getElementById("dob").value;
    var firstname = user.slice(1,4);
    var date =new Date(dob);
    var lastname =date.getDate();
    var fullname =firstname+lastname; 
    var includedata=document.getElementById("geta").innerHTML=fullname;
}
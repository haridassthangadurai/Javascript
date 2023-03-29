
var bdy = document.getElementsByTagName("body");
var mydiv = document.createElement("div");
var label = document.createTextNode("Login Page");
var inp= document.createElement("input");
var btn = document.createElement("button");
var btnval = document.createTextNode("Click");

btn.append(btnval);
mydiv.append(label);
mydiv.append(inp);
mydiv.append(btn);
bdy[0].append(mydiv);
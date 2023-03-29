var bg=document.getElementById("bg1")
    bg.style.backgroundColor="black";
    bg.style.height="45rem";
    bg.style.width="35rem";
    bg.style.margin="200px 0 100px 500px";
var bg2=document.getElementById("swbg")
    bg2.style.backgroundColor="gray";
    bg2.style.height="100px";
    bg2.style.width="250px"
    bg2.style.margin="auto";
    bg2.style.padding="10px";
    bg2.style.borderRadius="10px";
 var s1=document.getElementById("sw1")
     s1.style.margin="0 10px 30px 60px";
     s1.style.fontSize="25px";

var m1=document.getElementById("img1")
var m2=document.getElementById("img2")
var on=document.getElementById("b1");
on.style.margin="10px 10px 10px 60px";
on.style.width="50px";
on.style.padding="2px";
on.style.boxShadow="5px 5px 2px 0px black";


var off=document.getElementById("b2");
off.style.width="50px";
off.style.padding="2px";
off.style.boxShadow="5px 5px 2px 0px black";
function hari()
{
    m1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    m2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    on.style.backgroundColor="green";
    off.style.backgroundColor="white";
    s1.textContent="switched on";
    
   

}
function dass()
{
    m1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    m2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    on.style.backgroundColor="white";
    off.style.backgroundColor="red";
    s1.textContent="switched off";
    
}

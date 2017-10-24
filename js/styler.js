/*styling*/
var h1=document.body;
h1.style.textAlign="center";
h1.style.backgroundColor="black";

//cook-mate styling
h1=document.getElementsByTagName("DIV")[0];
h1.setAttribute("class","container-fluid animated rubberBand");
h1.setAttribute("id","cook-mate");
h1.style.border="thin solid red";
h1.style.borderRadius="20px";
h1.style.width="400px";
h1.style.height="auto";
h1.style.marginTop="200px";
h1.style.textAlign="center";

var e1=h1.children[0];
e1.style.color="blue";
e1.style.fontFamily="Baloo,cursive";
e1.style.marginBottom="-25px";
h1.children[1].style.color="wheat";
h1.children[1].style.marginBottom="25px";

//input
e1=document.getElementsByTagName("input");
e1[0].style.marginBottom="10px";
e1[0].style.width="100%";
e1[1].style.width="100%";
e1[0].setAttribute("placeholder","Username");
e1[0].setAttribute("id","usern");
e1[1].setAttribute("placeholder","Password");
e1[1].setAttribute("id","pword");
//buttonlogin
e1=document.forms[0].children[4];
e1.setAttribute("class","btn btn-success");
e1.setAttribute("type","button");
e1.setAttribute("value","Login");
e1.setAttribute("id","logins");
e1.setAttribute("onclick","login()");
e1.style.marginTop="5px";
e1.style.width="50%";


//buttonregister
e1=document.forms[0].children[5];
e1.setAttribute("class","btn btn-warning");
e1.setAttribute("type","button");
e1.setAttribute("value","Register");
e1.setAttribute("id","regis");
e1.setAttribute("onclick","regi()");
e1.style.marginTop="5px";
e1.style.width="50%";

//buttonguest
e1=document.forms[0].children[6];
e1.setAttribute("class","btn btn-primary");
e1.setAttribute("type","button");
e1.setAttribute("value","Continue as Guest");
e1.setAttribute("id","guest");
e1.setAttribute("onclick","signout();window.open(\"welcome.html\",\"_self\");");
e1.style.marginTop="5px";
e1.style.width="50%";



var l1=document.getElementsByTagName("LABEL")[0];
l1.style.color="goldenrod";
l1=document.getElementsByTagName("LABEL")[1];
l1.style.color="goldenrod";
/*styling*/
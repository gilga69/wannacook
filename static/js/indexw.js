


var recipie;
var count=0;



try{
  var cookies=localStorage.getItem("curus");
console.log(cookies);
var currentuse=cookies[cookies.length-1];

var alluserinfo=localStorage.getItem(allcookies);
console.log(alluserinfo);
var allusers=alluserinfo.split(';');
console.log(allusers);


 function using(){
var i=0;
var patt= new RegExp(currentuse);
while(!patt.test(allusers[i])){
  i++;

}
return allusers[i];
}
var usingnow=using();
console.log(usingnow);
var nameu=usingnow.split('.')[0];
document.getElementById("currentuser").innerHTML=nameu;
}
  catch(err){
    handleguest();
  }


//handleguest
function handleguest(){
    var g1=document.getElementById("yrec");
    while(g1.firstChild){
      g1.firstChild.parentNode.removeChild(g1.firstChild);
    }
    
    
    //h3
    var subelem=document.createElement("h3");
    var text=document.createTextNode("Hello!");
    subelem.appendChild(text);
    g1.appendChild(subelem);
    //h3

    //h1 in h3
    var subelem1=document.createElement("h1");
    subelem1.setAttribute("id","guestuser");
    subelem1.style.textShadow="3px 3px 3px #FF4500";
    text=document.createTextNode("Guest");
    subelem1.appendChild(text);
    subelem.appendChild(subelem1);
    //h1 in h3

     //button login 
     subelem=document.createElement("button");
     subelem.setAttribute("class","btn btn-success gap");
     subelem.setAttribute("onclick","window.open(\"index.html\",\"_self\");");
     text=document.createTextNode("Log In  ") ;
     subelem.appendChild(text);
     g1.appendChild(subelem);
     //button login
     //glyphicon
    var subelem2=document.createElement("span");
    subelem2.setAttribute("class","glyphicon glyphicon-user");
    subelem.appendChild(subelem2);

    var subelem2=document.createElement("span");
    subelem2.setAttribute("class","glyphicon glyphicon-send");
    

     //glyphicon
     //button register
     subelem=document.createElement("button");
     subelem.setAttribute("class","btn btn-primary");
     subelem.setAttribute("onclick","regi();");
     text=document.createTextNode("SignUp  ") ;
     subelem.appendChild(text);
     subelem.appendChild(subelem2);
     g1.appendChild(subelem);
     //button register 

    }

//handleguest


function articleObtain() {
  var h2=document.createElement("article");
  h2.setAttribute("class","container animated rollIn");
  h2.setAttribute("name","recipie");
  document.getElementById("articles").appendChild(h2);  
}





function setcookie() {
  localStorage.removeItem(usingnow);
  var dish=document.getElementById("inputt").value;
  if(dish==""){
    alert('There must be a name for that dish you cooked ☺');
    document.getElementById("inputt").focus();
    return false;
  }

  else if(findersc(dish)){
    alert("Thanks for being naughty and that's not a dish ;)");
    document.getElementById("inputt").focus();
    return false;
  }
 // document.cookie=
  //allcookies=document.cookie;
  //yday=allcookies.split('=')[1];  
  localStorage.setItem(usingnow,dish);
  
  console.log(localStorage.getItem(usingnow));
alert("Ah!Now that's a mouth watering one!");
 window.scrollTo(10,0);

}


function signout(){
  localStorage.removeItem("curus");
}








function createin(){
  
//headingcreation
var h1=document.createElement("h3");
document.getElementById("setter").appendChild(h1);
h1.setAttribute("id","inhead");
t= document.createTextNode("Mind telling us what you cooked today?");
h1.appendChild(t);


  //inputcreation
  h1=document.createElement("input");
document.getElementById("setter").appendChild(h1);
h1.setAttribute("type","text");
h1.setAttribute("id","inputt");
h1.setAttribute("placeholder","Dish");

//buttoncreation
h1=document.createElement("button");
document.getElementById("setter").appendChild(h1);
h1.setAttribute("type","submit");
h1.setAttribute("onclick","setcookie()");
h1.setAttribute("class","btn btn-primary")
var t=document.createTextNode("Submit");
h1.appendChild(t);


//buttoncreation

//creating anchor to move up
h1=document.createElement("a");
document.getElementById("setter").appendChild(h1);
h1.setAttribute("href","#select1");
h1.setAttribute("id","setterb");


h1=document.createElement("button");
document.getElementById("setterb").appendChild(h1);
h1.setAttribute("type","submit");
h1.setAttribute("id","butn");
h1.setAttribute("onclick"," alert('Chill! We have the best recipes for you ');" );
h1.setAttribute("class","btn btn-danger");
var t=document.createTextNode('Nothing Yet! :(');
h1.appendChild(t);

//styling
document.getElementById("setter").style.textAlign="center";
document.getElementById("setter").style.padding="10px 10px 10px 10px";
document.getElementById("inputt").style.margin="10px 10px 10px 10px";
document.getElementById("butn").style.margin="10px 10px 10px 10px";
document.getElementById("setter").style.margin="10px 10px 10px 10px";
document.getElementById("inhead").style.textAlign="center";
document.getElementById("inhead").style.color="wheat";
document.getElementById("setter").style.border="thick dotted red";
document.getElementById("setter").style.borderRadius="20px";

count++;
}




function yrecipeteller(){
 var rec=localStorage.getItem(usingnow);
  if(rec==null){
    alert("You haven't told us about your recipe yet!");
  }
     else{ alert(" Yesterday you cooked " + localStorage.getItem(usingnow) );
    }
   }
/*fp2.js*/


/*fp2.js*/
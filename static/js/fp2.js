

/*jscode*/
/*Globals*/

var enteredu="";
var enteredp="";
var allcookies;
var profile;

/*Globals*/
//login
function login(){
	
	var allow;
	enteredu=document.getElementById("usern").value;
	enteredp=document.getElementById("pword").value;

	//validation
	if(enteredu==""){
		alert("Enter your Username");
		document.forms[0].usern.focus();
		return false;
	}

	if(enteredp==""){
		alert("Enter Password!");
		document.forms[0].usern.focus();
		return false;
	}

	allow=lookup(enteredu,enteredp);

	if(allow){
		h1=document.getElementsByTagName("DIV")[0].setAttribute("class","animated hinge");
		localStorage.setItem("curus",enteredu+enteredp);
		setTimeout(function(){window.location = "/welcome"},3000);
	}
	else{
		alert("Incorrect Username or Password!!");
		document.forms[0].reset();
		document.forms[0].usern.focus();

	}


}

//login


//register
function regi(){
	var keeper=localStorage.getItem(keeper);

	var rname=prompt("Enter your name");
	while(rname==""){
		alert("Name required!");

		rname=prompt("Enter your Name");
	}

	if(rname!=null){

	while(findersc(rname)){
		alert("No special characters or numbers allowed");

		rname=prompt("Enter your Name");
	}
console.log(findersc(rname));}

	
	
	 var ruser=prompt("Enter a suitable username");
	while(ruser==""){
		alert("User Name required!");

		ruser=prompt("Enter a suitable username");
	}
      
      if(ruser!=null){
	while(findersp(ruser)||findersc(ruser))
	{
		alert("No special characters or spaces allowed");

		ruser=prompt("Enter a suitable usename");
	}}


	 var rpword=prompt("Enter a password");
	while(rpword==""){
		alert("Password required!");
		rpword=prompt("Enter a password");		
	}


	if(rpword!=null){
	while(findersp(rpword)){
		alert("No special characters or spaces allowed");

		rpword=prompt("Enter a password");
	} }
	


if(ruser!=null&&rpword!=null&&rname!=null){
	
	keeper=localStorage.getItem(allcookies)+";"+rname+"."+ruser+rpword;

localStorage.setItem(keeper,keeper);
localStorage.setItem(allcookies,keeper);
console.log(keeper);
console.log(localStorage.getItem(allcookies));

alert("Registration succesful!\n Login with your credentials!");}
else{
	alert("Registration unsuccesful!\nTry again!");
	
}

}

//register



//lookup
function lookup(enteredu,enteredp){

	var patt= new RegExp(enteredu+enteredp);
	cookies=localStorage.getItem(allcookies);
	console.log(cookies);
	
	if(patt.test(cookies))
	{
		return true;
	}
	

return false;
}

//lookup


//special character finder
function findersc(strn){
	var patt = new RegExp("[^a-zA-Z \b]")
	
	var res1="";
	res1=patt.test(strn);
	console.log(res1);

	if(res1)
	{		return true;
	}

	return false;
	}


function findersp(strn){	
	var res2="";
	var space= new RegExp("[ \b]");
	res2=space.test(strn);
	   console.log(res2+"spacetest");

	if(res2){
		return true;
	}
	
return false;
}



function signout(){
  localStorage.removeItem("curus");
}
/*jscode*/

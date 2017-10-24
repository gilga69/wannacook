

//recipiechecker
function writer() {
  var veggies=document.forms[0];
  var fruits=document.forms[1];
  var grains=document.forms[2];
  var spices=document.forms[3];
  var milkfs=document.forms[4];
  var essentials=document.forms[5];
  var i=0;
  while(count==0){
  createin();}
  
  //avlakki
if(veggies[0].checked
    && grains[3].checked
 &&spices[0].checked
 )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Poha</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+avlakki.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+avlakki.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

//upma
if(veggies[0].checked
 && grains[8].checked 
   && spices[0].checked 
  &&essentials[0].checked){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Upma</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+upma.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+upma.procedure
+"<br/>"
+"<br/><hr/><br/>";
  i++;
}

//lemonrice
if(veggies[8].checked 
	&&grains[9].checked
	&&fruits[3].checked
	&&grains[0].checked
	){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Lemon Rice</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+lemonrice.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+lemonrice.procedure
+"<br/>"
+"<br/><hr/><br/>";
  i++;
}
//utappa
if(grains[8].checked
	&&fruits[3].checked
	&&essentials[7].checked
	){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Uttappa</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+utappa.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+utappa.procedure
+"<br/>"
+"<br/><hr/><br/>";
  
  i++;
}
//parota
if(milkfs[10].checked)
{ 
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Parota</h1>"
  +"<br/>"
  +"<img class='img-circle img-responsive' id='recimg' src='4.jpg'/>"
  +"<h3>Ingredients Required</h3>"
  +parota.ingredients
  +"<br/><br/>"
  +"<h3>Procedure</h3>"
  +parota.procedure
  +"<br/>"
  
  +"<br/><hr/><br/>";
  
  i++;
  
}

//ravapongal
if(grains[8].checked
	&&milkfs[2].checked
	&&spices[3].checked
	
	)
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Rava Pongal</h1>"
  +"<br/>"
  +"<h3>Ingredients Required</h3>"
  +ravapongal.ingredients
  +"<br/><br/>"
  +"<h3>Procedure</h3>"
  +ravapongal.procedure
  +"<br/>"
  
  +"<br/><hr/><br/>"; 
  i++;
}

//gulab jamun

if( milkfs[10].checked
	&&milkfs[4].checked
){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1> Gulab Jamun</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+gulabjamun.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+gulabjamun.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

 //gajar halwa

if(veggies[1].checked
	&&spices[1].checked
	&&(milkfs[4].checked||milkfs[3].checked)
	&&milkfs[2].checked){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Gajar Halwa</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+gajarhalwa.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+gajarhalwa.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

//payasam

if(grains[9].checked
	&&milkfs[0].checked
	&&spices[2].checked
	&&milkfs[2].checked
	){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Payasam</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+payasam.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+payasam.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

//kaju barfi

if(fruits[10].checked
	&&milkfs[0].checked)
 {
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Kaju barfi</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+kajubarfi.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+kajubarfi.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


// shahi tukda

if( essentials[3].checked
 && essentials[1].checked 
 && milkfs[0].checked
 &&fruits[1].checked
 &&spices[2].checked
 &&fruits[12].checked
  ){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Shahi Tukda</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+shahitukda.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+shahitukda.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


// corianderrice

if( grains[9].checked
	&&veggies[12].checked
	&&veggies[0].checked
	&&essentials[0].checked
	&&essentials[1].checked
	&&milkfs[1].checked
	&&veggies[2].checked
	&&veggies[8].checked
	&&spices[11].checked
	&&spices[9].checked
  ){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Coriander Rice</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+corianderrice.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+corianderrice.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


// Vermicili upma

if( essentials[4].checked
 && grains[0].checked 
  &&veggies[0].checked
 &&veggies[7].checked
 &&veggies[3].checked
 &&veggies[1].checked
 &&spices[9].checked
  ){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Vermicelli Upma</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+vermicelliupma.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+vermicelliupma.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


// Bread upma

if( essentials[3].checked
 && grains[11].checked 
  &&veggies[0].checked
  &&veggies[8].checked
 &&veggies[7].checked
 &&veggies[3].checked
 &&veggies[1].checked
 &&fruits[3].checked
  ){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Bread Upma</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+breadupma.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+breadupma.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

// Millet idli

if( grains[7].checked
	&&grains[9].checked
	&&grains[0].checked
  ){
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Millets Idli</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+milletsidli.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+milletsidli.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


 //huruli saru

if(grains[6].checked
&& spices[5].checked
&&spices[9].checked
&&veggies[0].checked
&&essentials[1].checked
&&essentials[6].checked
  )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Hurulisaru</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+hurulisaru.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+hurulisaru.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

//sweet paddu

if(milkfs[12].checked
&& grains[10].checked
&& fruits[2].checked
&& spices[2].checked
&& milkfs[10].checked
  )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Sweet Paddu</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+sweetpaddu.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+sweetpaddu.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


//rotti

if(grains[9].checked
&& milkfs[12].checked
&& essentials[6].checked
  )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Rotti</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+rotti.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+rotti.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


 //tamarind rice

 if(grains[9].checked
 && grains[10].checked
 && essentials[10].checked
 && grains[0].checked
 && spices[7].checked
 && veggies[9].checked
   )
 {
   articleObtain();
   document.getElementsByTagName("article")[i].innerHTML="<h1>Tamarind Rice</h1>"
 +"<br/>"
 +"<h3>Ingredients Required</h3>"
 +tamarindrice.ingredients
 +"<br/><br/>"
 +"<h3>Procedure</h3>"
 +tamarindrice.procedure
 +"<br/>"
 +"<br/><hr/><br/>";
  i++;
  }


//tomato juice

if(veggies[7].checked
&& veggies[10].checked
 )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Tomato Juice</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+tomatojuice.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+tomatojuice.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


//bele dose

if(grains[1].checked
&& milkfs[12].checked
&& veggies[8].checked
&& veggies[10].checked
 )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Bele Dose </h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+hdosa.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+hdosa.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

 //rice upma

 if(grains[9].checked
 && grains[0].checked
 && spices[0].checked
 && veggies[0].checked
 && veggies[9].checked
 && veggies[7].checked
 && essentials[6].checked
  )
 {
   articleObtain();
   document.getElementsByTagName("article")[i].innerHTML="<h1>Rice Upma </h1>"
 +"<br/>"
 +"<h3>Ingredients Required</h3>"
 +riceupma.ingredients
 +"<br/><br/>"
 +"<h3>Procedure</h3>"
 +riceupma.procedure
 +"<br/>"
 +"<br/><hr/><br/>";
  i++;
  }

//holige

if(essentials[6].checked
&& milkfs[10].checked
&& grains[10].checked
&& grains[2].checked
 )
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Holige</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+holige.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+holige.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

//kayi holige

if(milkfs[11].checked
&& essentials[6].checked
&& milkfs[2].checked
&& veggies[10].checked
&& grains[10].checked
)
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Kayi Holige</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+kayiholige.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+kayiholige.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

// mavin kayi chitranna

if(fruits[6].checked
&& grains[9].checked
&& grains[2].checked
&& veggies[9].checked
&& essentials[6].checked
)
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Mango Rice</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+mangorice.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+mangorice.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }


//avlakki bisibelebath

if(essentials[2].checked
&& grains[1].checked
&& essentials[10].checked
&& grains[10].checked
&& veggies[10].checked
&& veggies[0].checked
&& milkfs[2].checked
&& grains[0].checked
)
{
  articleObtain();
  document.getElementsByTagName("article")[i].innerHTML="<h1>Avalakki Bisibelebath</h1>"
+"<br/>"
+"<h3>Ingredients Required</h3>"
+bisibelebath.ingredients
+"<br/><br/>"
+"<h3>Procedure</h3>"
+bisibelebath.procedure
+"<br/>"
+"<br/><hr/><br/>";
 i++;
 }

 //methi kadubu


 if(milkfs[11].checked
 && spices[7].checked
 && spices[0].checked
 && spices[6].checked
 && veggies[8].checked
 )
 {
   articleObtain();
   document.getElementsByTagName("article")[i].innerHTML="<h1>Methi Kadubu</h1>"
 +"<br/>"
 +"<h3>Ingredients Required</h3>"
 +methikadubu.ingredients
 +"<br/><br/>"
 +"<h3>Procedure</h3>"
 +methikadubu.procedure
 +"<br/>"
 +"<br/><hr/><br/>";
  i++;
  }

 //curd sandwitch

 if(milkfs[1].checked
 && essentials[3].checked
 )
 {
   articleObtain();
   document.getElementsByTagName("article")[i].innerHTML="<h1>Curd Sandwitch</h1>"
 +"<br/>"
 +"<h3>Ingredients Required</h3>"
 +curdsandwitch.ingredients
 +"<br/><br/>"
 +"<h3>Procedure</h3>"
 +curdsandwitch.procedure
 +"<br/>"
 +"<br/><hr/><br/>";
  i++;
  }

  //rasam

  if(veggies[7].checked
  && essentials[10].checked
  && grains[10].checked
  && spices[9].checked
  && spices[6].checked
  && spices[5].checked
  && veggies[9].checked
  && essentials[6].checked
  )
  {
    articleObtain();
    document.getElementsByTagName("article")[i].innerHTML="<h1>Rasam</h1>"
  +"<br/>"
  +"<h3>Ingredients Required</h3>"
  +rasam.ingredients
  +"<br/><br/>"
  +"<h3>Procedure</h3>"
  +rasam.procedure
  +"<br/>"
  +"<br/><hr/><br/>";
   i++;
   }

   //mango juice
   if(fruits[6].checked
   && spices[2].checked

   )
   {
     articleObtain();
     document.getElementsByTagName("article")[i].innerHTML="<h1>Mango juice</h1>"
   +"<br/>"
   +"<h3>Ingredients Required</h3>"
   +mangojuice.ingredients
   +"<br/><br/>"
   +"<h3>Procedure</h3>"
   +mangojuice.procedure
   +"<br/>"
   +"<br/><hr/><br/>";
    i++;
    }


   //aam channa chat

   if(fruits[6].checked
   && veggies[1].checked
   &&  veggies[0].checked
   && veggies[11].checked
   && veggies[2].checked
   && veggies[7].checked
   && spices[11].checked
   )
   {
     articleObtain();
     document.getElementsByTagName("article")[i].innerHTML="<h1>Channachat</h1>"
   +"<br/>"
   +"<h3>Ingredients Required</h3>"
   +channachat.ingredients
   +"<br/><br/>"
   +"<h3>Procedure</h3>"
   +channachat.procedure
   +"<br/>"
   +"<br/><hr/><br/>";
    i++;
    }


    //mango kuzhambu

    if(fruits[6].checked
    && essentials[10].checked
    && spices[7].checked
    
    && veggies[9].checked
    && spices[9].checked
    && grains[2].checked
    )
    {
      articleObtain();
      document.getElementsByTagName("article")[i].innerHTML="<h1>Mango Kuzhambu</h1>"
    +"<br/>"
    +"<h3>Ingredients Required</h3>"
    +kuzhambu.ingredients
    +"<br/><br/>"
    +"<h3>Procedure</h3>"
    +kuzhambu.procedure
    +"<br/>"
    +"<br/><hr/><br/>";
     i++;
     }

//pineapple juice 



if(i==1){
	document.getElementById("voila").innerHTML='☺ Voila!We are sure your loved ones<br/> would love this one'
	+'&nbsp<span class="glyphicon glyphicon-hand-down"></span>';
}

else if(i>1){
	document.getElementById("voila").innerHTML='☺ Voila!We are sure your loved ones<br/> would love one of these '+ 
	i 
	+' recipes!!&nbsp<span class="glyphicon glyphicon-hand-down"></span>';
}

if(i==0){alert("Nothing can be cooked with these!!Select more!✌");
}
}


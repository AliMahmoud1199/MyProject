  
 

 
function sum(str){
  this.str=str;
  this.asd=function(){
  console.log("test"+this.str);
}

 }


let p=new sum("ali");

p.asd();










// for(let i=1;i<=num;i++)
//   {
     
//         y *=i;
     
//   }


















    // How to change the content of HTML elements
    // How to change the style (CSS) of HTML elements
    // How to react to HTML DOM events
    // How to add and delete HTML elements

// console.log(Event);
//  var dem=document.querySelector("#demo");

// function test(e)
// {
//   console.log(e.type);
//    document.querySelector("p").style.color="red";
// }
//  dem.addEventListener("keypress", test);

/*
blur  	An element loses focus
change 	The content of a form element has changed

click 	An element is clicked on  ****************
copy 	The content of an element is copied 	 
cut 	The content of an element is cut 	 
dblclick 	An element is double-clicked
focus 	An element gets focus 	FocusEvent
focusin 	An element is about to get focus 	FocusEvent
focusout 	An element is about to lose focus
input 	An element gets user input 	InputEvent, Event
invalid 	An element is invalid 	Event
keydown 	A key is down 	KeyboardEvent
keypress 	A key is pressed 	KeyboardEvent
keyup 	A key is released 	KeyboardEvent
load 	An object has loaded 	UiEvent, Event
loadeddata 	Media data is loaded
mousedown 	The mouse button is pressed over an element 	MouseEvent
mouseenter 	The pointer is moved onto an element 	MouseEvent
mouseleave 	The pointer is moved out of an element 	MouseEvent
mousemove 	The pointer is moved over an element 	MouseEvent
mouseover 	The pointer is moved onto an element 	MouseEvent
mouseout 	The pointer is moved out of an element 	MouseEvent
mouseup 	A user releases a mouse button over an element
paste 	Some content is pasted in an element







*/


  
 
 

 





































//function loadDoc() {
  //   const xhttp = new XMLHttpRequest();
  //   xhttp.onload = function() {
  //     // var obj=JSON.parse(this.responseText);
  //     document.getElementById("demo").innerHTML = this.responseText;
  //     }
  //   xhttp.open("GET", "ajax_info.txt", true);
  //   xhttp.send();
  // }
//*************card */
//  var allitems=document.querySelectorAll(".list li");
//  var content=document.querySelector("#content");
//  var btn=document.querySelector("#addtocart");
// var totalprice =0;
//  allitems.forEach(function(item){
//           item.onclick=function(){
//             totalprice +=parseInt(item.getAttribute("price"));
//             // console.log(totalprice);
//             content.innerHTML +=item.textContent+"  ";
//             if(content.innerHTML !="")
//             {
//               btn.style.display="block" ;
//             }
//           }
//         }
// );
//  btn.onclick =function(){
//   console.log(totalprice);
//   document.getElementById("show").innerHTML="Total price ="+totalprice;
//  };
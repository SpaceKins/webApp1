window.onload = function(){

  console.log("Window Onload");
  
  var myName = 'Jon';

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  function generateDocument(){
    //1. document.createElement
    //2. element.appendChild

var lastNameElement=document.createElement('span');
lastNameElement.id="myLastName";

var lastNameText=document.createTextNode("test");
lastNameElement.appendChild(lastNameText);
    var myNameElement= document.getElementById("myName");

myNameElement.appendChild(lastNameElement);

/*
    var element = document.createElement('div');
    element.id = 'someId';
    document.body.appendChild(element);
    //<div id='someId'>TEST</div>

    var newElement = document.createElement('span');
    newElement.id = 'someOtherId';
    document.getElementById('someId').appendChild(newElement);
    */
  }

  generateDocument();

};

var pressedButton=function()
{
  var lastNameElement = document.getElementById("myLastName");
  lastNameElement.innerHTML="<h2>test</h2>";


};
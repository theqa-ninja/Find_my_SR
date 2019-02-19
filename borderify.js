document.body.style.border = "1px solid red";
console.log("big border placed");

var links = document.getElementsByTagName("a");
console.log("Found "+links.length + " links");
for(var i=0;i<links.length;i++)
{
  if(links[i].href)
  {
    links[i].style.border = "1px solid #00FF00";
  }
}


var inputList = document.getElementsByTagName("input");
console.log("Found "+ inputList.length + " inputs");
// console.log("hi mom!");
for(var i=0;i<inputList.length;i++)
{
  if(inputList[i].href)
  {
    inputList[i].style.border = "1px solid #FF0000";
  }
}

var inputs = document.querySelectorAll("[aria-label]");
console.log("Found "+ inputs.length + " blah");
for(var i=0;i<inputs.length;i++)
{
  if(inputs[i].href)
  {
    inputs[i].style.border = "1px solid #0000FF";
  }
}

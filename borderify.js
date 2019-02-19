tagList = ["a", "input", "ScreenReader", "img"]
attributeList = ["[aria-label]", "[screenreader-only]"]
mustContainList = ["screenreader-only", "alt", "aria-label"]


document.body.style.border = "1px solid red";
console.log("big border placed");

for(var n = 0; n < tagList.length; n++)
{
  var tagsFound = document.getElementsByTagName(tagList[n]);
  console.log("Found "+ tagsFound.length + " of tag: " + tagList[n]);
  for(var i=0;i<tagsFound.length;i++)
  {
    tagsFound[i].style.border = "1px solid #00FF00";
  }
}

for(var n = 0; n < attributeList.length; n++)
{
  var inputs = document.querySelectorAll(attributeList[n]);
  console.log("Found "+ inputs.length + " attribute: " + attributeList[n]);
  for(var i=0;i<inputs.length;i++)
  {
    inputs[i].style.border = "1px solid #0000FF";
  }
}

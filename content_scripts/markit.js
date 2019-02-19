tagList = ["a", "input", "img"]
attributeList = ["[aria-label]", "[screenreader-only]"]
mustContainList = ["title", "alt", "screenreader-only", "aria-label"]
messageList=[]

document.body.style.border = "1px solid red";
messageList.push("big border placed");

for(var n = 0; n < tagList.length; n++)
{
  var sadCounter = 0;
  var tagsFound = document.getElementsByTagName(tagList[n]);
  for(var i=0;i<tagsFound.length;i++)
  {
    tt = tagsFound[i];

    if (tt.getAttribute("aria-hidden") == "true")
      continue;

    SRtext = [];
    SRtext.push("ScreenReader will see:");
    SRtext.push("Found via tag: "+ tagList[n]);
    attribs = [];
    for(var a = 0; a<mustContainList.length; a++)
    {
      temp = tt.getAttribute(mustContainList[a]);
      if ((temp != null) && (temp.trim().length > 0) )
      {
        attribs.push(temp);
        SRtext.push(mustContainList[a] + ":" + temp + "\n");
      }
    }

    // get the text value of an element
    temp = tt.text;
    if ((temp != null) && (temp.trim().length > 0) )
    {
      attribs.push(temp);
      SRtext.push("text:" + temp);
    }

    if (attribs.length == 0)
    {
      tt.style.border = "1px solid #00FF00";
      console.log(tt + " doesn't have SR stuff GREEN");
      console.log(tt);
      sadCounter++;
    }
    else
    {
      srAddOn = "";
      // if (tt.title != null)
      //   srAddOn = tt.title.text + "\n";
      for(var m=0; m<SRtext.length; m++)
      {
        srAddOn += SRtext[m] + "\n";
      }
      SRtext = [];
      tt.title = srAddOn;
    }
  }
  messageList.push("Shark is Sad on " + sadCounter + "/" + tagsFound.length + " of tag: " + tagList[n]);
}

for(var n = 0; n < attributeList.length; n++)
{
  var inputs = document.querySelectorAll(attributeList[n]);
  messageList.push("Found "+ inputs.length + " attribute: " + attributeList[n]);
  for(var i=0;i<inputs.length;i++)
  {
    tt = inputs[i];

    if (tt.getAttribute("aria-hidden") == "true")
      continue;

    SRtext = [];
    SRtext.push("Found via attribute: " + attributeList[n])
    attribs = [];
    for(var a = 0; a<mustContainList.length; a++)
    {
      temp = tt.getAttribute(mustContainList[a]);
      if ((temp != null) && (temp.trim().length > 0) )
      {
        attribs.push(temp);
        SRtext.push(mustContainList[a] + ":" + temp + "\n");
      }
    }

    // get the text value of an element
    temp = tt.text;
    if ((temp != null) && (temp.trim().length > 0) )
    {
      attribs.push(temp);
      SRtext.push("text:" + temp);
    }

    if (attribs.length == 0)
    {
      inputs[i].style.border = "1px solid #0000FF";
      console.log(tt + " doesn't have SR stuff BLUE");
      console.log(tt);
    }
    else
    {
      srAddOn = tt.title;
      // if (tt.title != null)
      //   srAddOn = tt.title.text + "\n";
      for(var m=0; m<SRtext.length; m++)
      {
        srAddOn += SRtext[m] + "\n";
      }
      SRtext = [];
      tt.title = srAddOn;
    }
  }
}

message = "";
for(var m=0; m<messageList.length; m++)
{
  message += messageList[m] + "\n";
  if (m > 10)
    break;
}

alert(message);
// create the element nodes with their values
var h1 = document.createElement("h1");
var para = document.createElement("p");

// create some text nodes with their values
var h1Text = document.createTextNode("How to Add Content to Your HTML Using JavaScript");
var paraText = document.createTextNode("As understood by Leah Bateman on 10/7/2015");

// attach the text nodes to the element nodes
h1.appendChild(h1Text);
para.appendChild(paraText);

// put the element nodes in their proper locations in the document
document.getElementById("myHeader").appendChild(h1);
document.getElementById("myHeader").appendChild(para);

// now align everything

// start by creating an align attribute node
// I thought I could get away with using one for both elements,
// but apparently I need one for each, or else it doesn't work properly
// (I know, we're not supposed to align the H1. I'm exercising artistic license.
// The visual designer can take it up with me if s/he has issues.)
// (Obviously I wouldn't do that in real life.)
// (Unless I was the visual designer too.)
// (But then I'd have bigger problems!)
var h1Align = document.createAttribute("align");
var paraAlign = document.createAttribute("align");

// then give the attribute node a value
h1Align.value = "center";
paraAlign.value = "center";

// then attach the attribute node to the element nodes
h1.setAttributeNode(h1Align);
para.setAttributeNode(paraAlign);
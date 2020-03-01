function htmlinit()
{
    var cont=document.createElement("container");
    document.body.appendChild(cont);

    var label1=document.createElement("label");
    label1.innerHTML="Number of Days";

    var input1=document.createElement("input");
    input1.setAttribute("id", "ip1");
    input1.setAttribute("type", "number");
    input1.setAttribute("style", "width:200px");
    
    var button1=document.createElement("button");
    button1.setAttribute("onclick", "humanise()");
    button1.innerHTML="convert to yrs,weeks";

    var label2=document.createElement("label");
    label2.innerHTML="Answer:";
    
    var input2=document.createElement("input");
    input2.setAttribute("id", "ip2");
    input2.setAttribute("type", "texts");
    input2.setAttribute("style", "width:200px");

    var lbreak=document.createElement("br");

    
    cont.appendChild(label1);
    cont.appendChild(input1);
    
    cont.appendChild(button1);
    cont.appendChild(lbreak);
    cont.appendChild(label2);
    cont.appendChild(input2);
        
}




function humanise () 
{
    var diff=parseInt(document.getElementById("ip1").value);
    // The string we're working with to create the representation
    var str = '';
    // Map lengths of `diff` to different time periods
    var values = [[' year', 365], [' month', 30], [' day', 1]];
  
    // Iterate over the values...
    for (var i=0;i<values.length;i++) 
    {
      var amount = Math.floor(diff / values[i][1]);
  
      // ... and find the largest time value that fits into the diff
      if (amount >= 1)
       {
         // If we match, add to the string ('s' is for pluralization)
         str += amount + values[i][0] + (amount > 1 ? 's' : '') + ' ';
  
         // and subtract from the diff
         diff -= amount * values[i][1];
      }
    }
  
    var ans= str;
    console.log(str);
    document.getElementById("ip2").value=ans;
  }
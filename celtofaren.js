

function htmlinit()
{
    var cont=document.createElement("container");
    document.body.appendChild(cont);

    var label1=document.createElement("label");
    label1.innerHTML="Temp in Celsius:";

    var input1=document.createElement("input");
    input1.setAttribute("id", "ip1");
    input1.setAttribute("type", "number");
    input1.setAttribute("style", "width:200px");
    
    var button1=document.createElement("button");
    button1.setAttribute("onclick", "celtofaren()");
    button1.innerHTML="Convert to Farenheit";

    var label2=document.createElement("label");
    label2.innerHTML="Answer:";
    
    var input2=document.createElement("input");
    input2.setAttribute("id", "ip2");
    input2.setAttribute("type", "number");
    input2.setAttribute("style", "width:200px");

    var lbreak=document.createElement("br");

    
    cont.appendChild(label1);
    cont.appendChild(input1);
    
    cont.appendChild(button1);
    cont.appendChild(lbreak);
    cont.appendChild(label2);
    cont.appendChild(input2);
        
}

function celtofaren()
{
    var cel=parseInt(document.getElementById("ip1").value);
    var faren= (cel*(9/5)+32).toFixed(1);
    console.log(faren);
    document.getElementById("ip2").value=faren;
}





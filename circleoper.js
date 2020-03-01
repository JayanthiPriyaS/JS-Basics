const pi=3.14;

function htmlinit()
{
    var cont=document.createElement("container");
    document.body.appendChild(cont);

    var label1=document.createElement("label");
    label1.innerHTML="Enter Radius:";

    var input1=document.createElement("input");
    input1.setAttribute("id", "ip1");
    input1.setAttribute("type", "number");
    input1.setAttribute("style", "width:200px");
    
    var button1=document.createElement("button");
    button1.setAttribute("onclick", "Area()");
    button1.innerHTML="Calculate Area";

    var button2=document.createElement("button");
    button2.setAttribute("onclick", "Circum()");
    button2.innerHTML="Calculate Circumference";

    var button3=document.createElement("button");
    button3.setAttribute("onclick", "Dia()");
    button3.innerHTML="Calculate Diameter";

    var label2=document.createElement("label");
    label2.innerHTML="Answer:";
    
    var input2=document.createElement("input");
    input2.setAttribute("id", "ip2");
    input2.setAttribute("type", "number");
    input2.setAttribute("style", "width:200px");

    var linebreak=document.createElement("br");

    
    cont.appendChild(label1);
    cont.appendChild(input1);
    cont.appendChild(linebreak);
    cont.appendChild(linebreak);
    cont.appendChild(button1);
    cont.appendChild(button2);
    cont.appendChild(button3);
    cont.appendChild(linebreak);
    
    cont.appendChild(label2);
    cont.appendChild(input2);
        
}

function Area()
{
    var rad=parseInt(document.getElementById("ip1").value);
    var ans=(pi*(rad*rad));
    console.log(ans);
    document.getElementById("ip2").value=ans;
}

function Circum()
{
    var rad=parseInt(document.getElementById("ip1").value);
    var ans=2*(pi*(rad));
    console.log(ans);
    document.getElementById("ip2").value=ans;
}

function Dia()
{
    var rad=parseInt(document.getElementById("ip1").value);
    var ans=(2*rad);
    console.log(ans);
    document.getElementById("ip2").value=ans;
}




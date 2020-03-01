

function htmlinit()
{
    var cont=document.createElement("container");
    document.body.appendChild(cont);

    var label1=document.createElement("label");
    label1.innerHTML="Length in centimetre:";

    var input1=document.createElement("input");
    input1.setAttribute("id", "ip1");
    input1.setAttribute("type", "number");
    input1.setAttribute("style", "width:200px");
    
    var button1=document.createElement("button");
    button1.setAttribute("onclick", "centitometr()");
    button1.innerHTML="Calculate metr";

    var button2=document.createElement("button");
    button2.setAttribute("onclick", "centitokm()");
    button2.innerHTML="Calculate kilometr";

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
    cont.appendChild(button2);
    
    cont.appendChild(lbreak);
    cont.appendChild(label2);
    cont.appendChild(input2);
        
}

function centitometr()
{
    var centi=parseInt(document.getElementById("ip1").value);
    var ans=  centi/100;
    console.log(ans);
    document.getElementById("ip2").value=ans;
}

function centitokm()
{
    var centi=parseInt(document.getElementById("ip1").value);
    var ans=  centi/100000;
    console.log(ans);
    document.getElementById("ip2").value=ans;
}




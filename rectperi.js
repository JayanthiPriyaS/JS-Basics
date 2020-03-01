
function htmlinit()
{
    var cont=document.createElement("container");
    document.body.appendChild(cont);

    var label1=document.createElement("label");
    label1.innerHTML="Enter Length:";

    var label2=document.createElement("label");
    label2.innerHTML="Enter Breadth:";
      
    var input1=document.createElement("input");
    input1.setAttribute("id", "ip1");
    input1.setAttribute("type", "number");
    input1.setAttribute("style", "width:200px");

    var input2=document.createElement("input");
    input2.setAttribute("id", "ip2");
    input2.setAttribute("type", "number");
    input2.setAttribute("style", "width:200px");

    var button1=document.createElement("button");
    button1.setAttribute("onclick", "periArea()");
    button1.innerHTML="Calculate Perimeter";

    var label3=document.createElement("label");
    label3.innerHTML="Answer:";
    
    var input3=document.createElement("input");
    input3.setAttribute("id", "ip3");
    input3.setAttribute("type", "number");
    input3.setAttribute("style", "width:200px");


    var linebreak=document.createElement("br");

    
    cont.appendChild(label1);
    cont.appendChild(input1);
    cont.appendChild(linebreak);
    cont.appendChild(label2);
    cont.appendChild(input2);
    cont.appendChild(linebreak);    
    cont.appendChild(button1);
    cont.appendChild(linebreak);
    cont.appendChild(linebreak);
    cont.appendChild(label3);
    cont.appendChild(input3);
        
}


function periArea()
{
    var len=parseInt(document.getElementById("ip1").value);
    var bre=parseInt(document.getElementById("ip2").value);
    console.log(len);
    console.log(bre);
    var ans=(2*(len + bre));
    console.log(ans);
    document.getElementById("ip3").value=ans;
}

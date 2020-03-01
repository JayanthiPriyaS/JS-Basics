
function htmlinit()
{
    var cont=document.createElement("container");
    document.body.appendChild(cont);

    var label1=document.createElement("label");
    label1.innerHTML="Enter Number1:";

    var label2=document.createElement("label");
    label2.innerHTML="Enter Number2:";
      
    var input1=document.createElement("input");
    input1.setAttribute("id", "ip1");
    input1.setAttribute("type", "number");
    input1.setAttribute("style", "width:200px");

    var input2=document.createElement("input");
    input2.setAttribute("id", "ip2");
    input2.setAttribute("type", "number");
    input2.setAttribute("style", "width:200px");

    var button1=document.createElement("button");
    button1.setAttribute("onclick", "addNums()");
    button1.innerHTML="Add nums";

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
    
    
    var res=calcArea();
    console.log(res);
    displayValue(res);

    
}


function addNums()
{
    var num1=parseInt(document.getElementById("ip1").value);
    var num2=parseInt(document.getElementById("ip2").value);
    console.log(num1);
    console.log(num2);
    var ans=num1 + num2;
    console.log(ans);
    document.getElementById("ip3").value=ans;
}

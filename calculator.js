function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay(){
    document.getElementById("screen").value="";

}

function equalClick(){
    let text=document.getElementById("screen").value;
    
    let result=eval(text);
    // eval is a default function which perform all the operation

    document.getElementById("screen").value=result;
}
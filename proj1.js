let screen=document.getElementById("screen");
buttons =document.querySelectorAll("button");
let value='';
for(i of buttons){
    i.addEventListener('click', (e) => {
        operator=e.target.innerText;
        console.log("Operation is:",operator);
        if(operator=='x'){
            operator='*';
            value+=operator;
            screen.value =value;
        }
        else if(operator=="C"){
            value="";
            screen.value=value;
        }
        else if(operator=="="){
            screen.value=eval(value);
        }
        else if(operator == "Del"){
            var a = value.length - 1;
            value = value.slice(0,a);
            screen.value = value;
        }
        else{
            value+=operator;
            screen.value=value;
        }
    })
}
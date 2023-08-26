const input=document.getElementById("input-box");
const list=document.getElementById("list");

function AddTask(){
    if(input.value === ''){
        alert("You must write your work!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveList();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveList();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
},false);

function saveList(){
    localStorage.setItem("data",list.innerHTML);
}
function showList(){
    list.innerHTML=localStorage.getItem("data");
}
showList();
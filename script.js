let input=document.getElementById('input');
let btn=document.getElementById('btn');
let list=document.getElementById('list');
btn.addEventListener('click',function(){
    let task=input.value.trim() ;
    if(task){
        let li=document.createElement('li');
        li.textContent=task;
        li.addEventListener("click",function (){
        li.classList.toggle("completed");
    })


let delbtn=document.createElement('button');
delbtn.textContent="Delete";
li.appendChild(delbtn);
delbtn.addEventListener("click",function (){
    li.remove();
}
)
list.appendChild(li);
input.value="";
    }
});
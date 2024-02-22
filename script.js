let button=document.getElementById("addButton")

function addItem(){
    let item=document.getElementById("new")
    let list=document.getElementById("list")
    if(item.value){
    list.innerHTML+= `<div>
    <span>${item.value}</span>
    <button class="toggleStatus">done</button>
</div>`
let allBtns=document.getElementsByClassName("toggleStatus")

for(let i=0;i<allBtns.length;i++){
allBtns[i].addEventListener("click",toggleItemStatus)
}
item.value=""
    }
}
  
function toggleItemStatus(event){
if(event.target.parentElement.className==="done"){
    event.target.parentElement.className=""
    event.target.textContent="Done"
}else{
    event.target.parentElement.className="done"
    event.target.textContent="not done"
}

}
    



button.addEventListener("click",addItem)
let allBtns=document.getElementsByClassName("toggleStatus")

for(let i=0;i<allBtns.length;i++){
allBtns[i].addEventListener("click",toggleItemStatus)

}

let btncomp=document.getElementById("mark")
btncomp.addEventListener("click",completeTask)

function completeTask(){
    let list=document.getElementById("list")
    for(let i=0;i<list.children.length;i++){
        if(list.children[i].className===""){
            list.children[i].className="done"
            list.children[i].children[1].textContent="not done"
        }
    }
}
let filterInput=document.getElementById("filterBox")
    filterInput.addEventListener("input",filterItems)

    function filterItems(event){
        let list=document.getElementById("list")
        for(let i=0;i<list.children.length;i++){
            if (list.children[i].children[0].textContent.toLowerCase().includes(event.target.value.toLowerCase())){
            list.children[i].style=""
            
            }else{
                list.children[i].style.display="none"
            }

        }
    }

console.log("ToDos App in JS")

// to access items
const getItems = async ()=>{
    let ele = document.getElementsByClassName('todoList')[0]
    for(let i = 0; i<localStorage.length; i++)
    {
        let key = localStorage.key(i)
        let obj = JSON.parse(localStorage.getItem(key))
        let bar = document.createElement("div")
        let urgent = obj.status
        let value = obj.value
        bar.className = "bar"
        bar.innerHTML = `<div class="disc"></div><div class='key'>${key}</div>
        <div class='value'>${value}</div>`
        if(urgent=='u') {
        bar.getElementsByClassName("disc")[0].style.background = "red"    
        }
        else if(urgent=='n') {
        bar.getElementsByClassName("disc")[0].style.background = "green";
        }
        else{
            bar.getElementsByClassName("disc")[0].style.background = "yellow";
        }
        ele.appendChild(bar)
    }
}

// adds item when pressed submit
const addItems = async ()=>{
    let urgent = document.getElementById("status").value
    let key = document.getElementById("subject").value
    let value = document.getElementById("todo").value
    let obj = {
        'status':urgent,
        'value':value
    }
    localStorage.setItem(key,JSON.stringify(obj))
    window.location.reload()
    document.getElementsByClassName("form1")[0].style.display = "none"
}

// Displays add form
const addItemsForm = async ()=>{
    document.getElementsByClassName("form1")[0].style.display = "flex"
    document.getElementsByClassName("form2")[0].style.display = "none"
    document.getElementsByClassName("submit1")[0].addEventListener("click",addItems)
}

// Clears all items
const clearItems = async ()=>{
    localStorage.clear()
    window.location.reload()
}

// Deletes item when pressed submit
const deleteItems = async ()=>{
    let key = document.getElementById("key").value
    localStorage.removeItem(key)
    window.location.reload()
    document.getElementsByClassName("form1")[0].style.display = "none"
}

// Displays Delete form
const deleteItemsForm = async ()=>{
    console.log("I'm here")
    document.getElementsByClassName("form2")[0].style.display = "flex"
    document.getElementsByClassName("form1")[0].style.display = "none"
    document.getElementsByClassName("submit2")[0].addEventListener("click",deleteItems)
}

// Main Function
const mainFunc = async ()=>{
    await getItems()
    document.getElementsByClassName("buttons")[0].addEventListener("click",addItemsForm)
    document.getElementsByClassName("buttons")[1].addEventListener("click",deleteItemsForm)
    document.getElementsByClassName("buttons")[2].addEventListener("click",clearItems)
}
mainFunc()


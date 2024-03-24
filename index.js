
const form = document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault()

    const my_obj = { 
        "expense":this.expense.value,
        "description":this.description.value,
        "categories":this.categories.value
    }


    const parse = JSON.stringify(my_obj)

    localStorage.setItem(this.description.value,parse)

    this.expense.value = ""
    this.description.value = ""
    this.categories.value = ""

    usershow(my_obj)
    

})

function usershow(obj){

    const list = document.getElementById("list")
    const li = document.createElement("li")
    li.innerText = `Expense: ${obj.expense} $ --- Categories: ${obj.categories} --- Description: ${obj.description}`

    const hr = document.createElement("hr")

    const del = document.createElement("button")
    del.type = "button"
    del.value = obj.description
    del.innerText = "Delete"
    del.className = "del"
    del.onclick = (event)=>{
        localStorage.removeItem(obj.description)
        list.removeChild(li)
    }

    const edit = document.createElement("button")
    edit.type = "button"
    edit.value = obj.description
    edit.innerText = "Edit"
    edit.className = "edit"
    edit.onclick = (event)=>{
        localStorage.removeItem(obj.description)
        list.removeChild(li)

        let a = document.querySelectorAll("input")
        let y = document.getElementById("Categories")
         y.value = ""
        a[0].value  = obj.expense
        a[1].value = obj.description


    }

    li.appendChild(del)
    li.appendChild(edit)
    li.append(hr)
    list.appendChild(li)

    
}

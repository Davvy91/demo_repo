const todoInput = document.querySelector('#todo-input')
const addBtn = document.querySelector('#add-btn')
const itemsList = document.querySelector('#todo-list')
const clearAllBtn = document.querySelector('#clear-all')

addBtn?.addEventListener('click', evt => {
    evt.preventDefault()

    const listItem = document.createElement('li')
    itemsList?.appendChild(listItem)

    const completeTodo = document.createElement('input')
    completeTodo.setAttribute('type', 'checkbox')
    completeTodo.setAttribute('id', 'item')
    listItem.appendChild(completeTodo)
    completeTodo.addEventListener('click', evt => {
        if (evt.target.checked) {
            todoText.style.textDecoration = 'line-through'
        } else {
            todoText.style.textDecoration = 'none'
        }
    })

    const todoText = document.createElement('label')
    todoText.setAttribute('for', 'item')
    todoText.textContent = todoInput.value
    listItem.appendChild(todoText)
    todoText.addEventListener('blur', evt => {
        evt.target.removeAttribute('contenteditable')
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    listItem.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        listItem.remove()
    })

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    listItem.appendChild(editBtn)
    editBtn.addEventListener('click', evt => {
        todoText.setAttribute('contenteditable', 'true')
        todoText.focus()
    })
})

clearAllBtn?.addEventListener('click', evt => {
    const items = document.querySelectorAll('#todo-list > li')
    items.forEach(item => {
        item.remove()
    })
})

const cb = document.querySelector('#cb');
const label = document.querySelector('[for = "cb"]')

cb?.addEventListener('click', evt => {
    if (evt.target.checked) {
        label.style.textDecoration = 'line-through'
    } else {
        label.style.textDecoration = 'none'
    }
})


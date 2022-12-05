const openBtn = document.getElementById('openBtn')
const openBtnClass = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
let status = false
openBtn.addEventListener('click', Liopen)

function Liopen(){
    if(status === false ){
        sidebar.classList.add('show-sidebar')
        openBtnClass.classList.replace('sidebar-toggle-close','sidebar-toggle-open')
        openBtn.textContent = ">"
        status = true
    }else{
        sidebar.classList.remove('show-sidebar')
        openBtnClass.classList.replace('sidebar-toggle-open','sidebar-toggle-close')
        openBtn.textContent = "<"
        status = false
    }

}
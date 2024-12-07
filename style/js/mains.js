let turn='x'
let title = document.querySelector(".title")
function game (id) {
// console.log(id);
let element=document.getElementById(id)
console.log(element);
if (turn=='x' && element.innerHTML=='') {
    element.innerHTML='x'
    title.innerHTML='o'
    turn = 'o'
}
else if (turn==='o' && element.innerHTML==''){
    element.innerHTML='o'
    title.innerHTML='x'
    turn = 'x'
}
}

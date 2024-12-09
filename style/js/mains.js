let turn='x'
let title = document.querySelector(".title")
function end (num1 , num2 , num3) {
    title.innerHTML = `${squre[num1]}win`;
    document.getElementById("item"+num1).style.backgroundColor='green';
    document.getElementById("item"+num2).style.backgroundColor='green';
    document.getElementById("item"+num3).style.backgroundColor='green';
    
    setInterval (() => {
        title.innerHTML +='.'
    },1000);
    
    setTimeout (() => {
        location.reload()
    } ,4000)
}
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
win()
}
let squre = []
function win () {
for (let i=1 ; i<10 ; i++) {
    squre[i]=document.getElementById("item"+i).innerHTML
}
if (squre[1] == squre[2] && squre[2]== squre[3] && squre[1]!='') {
// console.log('done');
end(1,2,3);
}
else if (squre[4] == squre[5] && squre[5]== squre[6] && squre[5]!='') {
// console.log('done');
end(4,5,6);
}
else if (squre[7] == squre[8] && squre[8]== squre[9] && squre[7]!='') {
console.log('done');
end(7,8,9);
}
else if (squre[1] == squre[4] && squre[4]== squre[7] && squre[4]!='') {
console.log('done');
end(1,4,7);
}
else if (squre[2] == squre[5] && squre[5]== squre[8] && squre[2]!='') {
console.log('done');
end(2,5,8);
}
else if (squre[3] == squre[6] && squre[6]== squre[9] && squre[9]!='') {
console.log('done');
end(3,6,9);
}
else if (squre[1] == squre[5] && squre[5]== squre[9] && squre[9]!='') {
console.log('done');
end(1,5,9)
}
else if (squre[3] == squre[5] && squre[5]== squre[7] && squre[5]!='') {
console.log('done');
end(3,5,7);
}
else{
    console.log('lose');
    
}
}


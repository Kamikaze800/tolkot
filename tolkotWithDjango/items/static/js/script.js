let mycard = document.querySelectorAll('.mycard');
let mycard_block = document.querySelectorAll('.mycard_block');
let body = document.querySelector('.body');
let ten = document.querySelector('.ten');
let krest_block = document.querySelectorAll('.krest_block');
let kategoris = document.querySelectorAll('.kategoris');
/* mycard[0].onclick = function(){
    mycard_block[0].classList.add('mycard_blockAct');
    ten.classList.add('tenAct')
}
krest_block.onclick = function(){
    mycard_block[0].classList.remove('mycard_blockAct');
    ten.classList.remove('tenAct')
} */
for (let i = 0; i < 4; i++) {
    mycard[i].onclick = function(){
    mycard_block[i].classList.add('mycard_blockAct');
    ten.classList.add('tenAct')
    }
    krest_block[i].onclick = function(){
    mycard_block[i].classList.remove('mycard_blockAct');
    ten.classList.remove('tenAct')
    }
    kategoris.onclick = function(){
    mycard_block[i].classList.remove('mycard_blockAct');
    ten.classList.remove('tenAct');
    }
}

let name_category = document.querySelectorAll('.name_category')
let category_block = document.querySelectorAll('.category_block')
for(let i; i<4; i++){
    name_category[i].onclick = function(){
    category_block[i].classList.add('category_blockAct')
    }
}
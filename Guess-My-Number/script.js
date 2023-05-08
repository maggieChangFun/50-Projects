'use strict';
const checkButton = document.querySelector('.btn.check');
const againButton = document.querySelector('.btn.again');
const score = document.querySelector('.score');
const guessNum = document.querySelector('.guess');
const rightNumber = document.querySelector('.number');

rightNumber.value = 8;

checkButton.addEventListener('click',()=>{
    if(guessNum.value != rightNumber.value){
        score.textContent=score.textContent-1;
    }else{
        console.log('true');
    }
})
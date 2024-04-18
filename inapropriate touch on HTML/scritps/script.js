let count = document.querySelector('.numcounter');
let resbtn = document.querySelector('.resbtn')
let decrease = document.querySelector('.decbtn')
let array = ["gun" , "pistol" , "ak47"]
count.innerHTML = array.length;
let numcounter = count.innerHTML;


document.querySelector('.incbtn').addEventListener('click' , () =>{
    if(numcounter < 10 && numcounter >= 0 ){
    numcounter ++;
    count.innerHTML = numcounter;
    }
});

resbtn.addEventListener('click' , () => {
    numcounter = 0;
    count.innerHTML = numcounter;
})

decrease.addEventListener('click' , () =>{
    if(numcounter > 0 && numcounter <= 10){
        numcounter --;
        count.innerHTML = numcounter;
    }
});



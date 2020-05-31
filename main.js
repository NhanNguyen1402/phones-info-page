const info = document.querySelectorAll('.content > div');
const control = document.getElementById('btn');
let i = 0;
info[0].style.display = 'block';
control.addEventListener('click' , () => {
    if( i < info.length){
        i--;
    }
    if( i < 0){
        i=3;
        info[0].style.display = 'none';
    }
    info[i+1].style.display = 'none';
    info[i].style.display = 'block';
})
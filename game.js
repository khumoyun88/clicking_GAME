const click=document.querySelector('.click'),
boxes=document.querySelectorAll('.boxes'),
overly=document.querySelector('.overly'),
hide=document.querySelector('.hide');

let i
click.addEventListener('click',()=>{
    i=0
    overly.classList.remove('hide')
    boxes[i].style.zIndex=10
    boxes.forEach((item)=>{
        item.style.cursor='pointer'
    })
})

boxes.forEach((item)=>{
   item.addEventListener('click',()=>{
    if(!overly.classList.contains('hide')){
        boxes[i].style.zIndex='0'
        boxes[i].style.cursor='default'
        i++
    }if(i<3){
        boxes[i].style.zIndex=10
    }else{
        overly.classList.add('hide')
    }
   })
})










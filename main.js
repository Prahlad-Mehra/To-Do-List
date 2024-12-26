const lst=document.querySelector('ul')
const add=document.getElementById('submit')
const input=document.getElementById('addbar');
add.addEventListener('click',()=>{
    if(input.value.trim()!==""){
        const li=document.createElement('li')
        // li.textContent="Prahlad"
        // lst.appendChild(li)
        const value=input.value.trim()
        input.value=""
        //creation of checkbox
        const box=document.createElement('input')
        box.type='checkbox'
        box.className='ok'
        //------------------------------------
        //creation of P tag and putting input value
        const tsk=document.createElement('p')
        tsk.textContent=value
        //------------------------------------
        //creation of cross button
        const crossbutton=document.createElement('button')
        crossbutton.textContent='❌'
        crossbutton.className='cross'
        //putting all three elements inside li
        li.appendChild(box)
        li.appendChild(tsk)
        li.appendChild(crossbutton)
        lst.appendChild(li)
        //putting functionality of removing and checkbox done
        crossbutton.addEventListener('click',()=>{
            li.remove();
        })
        box.addEventListener('change',(check)=>{
            if(check.target.checked){
                li.style.backgroundColor='#59d966'
                tsk.style.textDecoration='line-through'
            }
            else{
                li.style.backgroundColor='transparent'
                tsk.style.textDecoration='none'
            }
        })
    }
    else{
        input.value=""
    }
})

const navbarbutton = document.querySelector('#navbarbutton');
const actualnavbar = document.querySelector('#actualnavbar');

navbarbutton.addEventListener('click', (e) => {
    const overlay = document.querySelector('#overlay');
    actualnavbar.style.transform = 'translateX(0px)';
    overlay.style.display = 'initial';
    setTimeout(()=>{
        overlay.style.opacity = '1';
    },300)
    
})

const cutbutton = document.querySelector('#cutbutton');

cutbutton.addEventListener('click', ()=>{
    actualnavbar.style.transform = 'translateX(-100%)';
    overlay.style.opacity = '0';
    setTimeout(()=>{
        overlay.style.display = 'none';
    },1100)
})

const inputfields = document.querySelectorAll('.inputfields');
const removeput = document.querySelector('#removeput');
const formcontent = document.querySelector('#formcontent');

for(let i=0;i<inputfields.length;i++)
{
    inputfields[i].addEventListener('click',(e)=>{
        e.preventDefault();
        formcontent.removeChild(removeput);
        inputfields[i].after(removeput);
    })
}
    



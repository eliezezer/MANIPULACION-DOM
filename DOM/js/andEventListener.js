const calculo1=document.querySelector('#calculo1')
const calculo2=document.querySelector('#calculo2')
const p=document.querySelector('#resultado')
const btn=document.querySelector("#btncalcular")
const form=document.querySelector("#form")

btn.addEventListener('click',btnOnclick);
//form.addEventListener('submit',btnOnclick);

function btnOnclick(){
    //event.preventDefault()
    const suma= Number(calculo1.value)+ Number(calculo2.value)
    p.innerText="resultado: "+suma
}

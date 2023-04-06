const calculo1=document.querySelector('#calculo1')
const calculo2=document.querySelector('#calculo2')
const p=document.querySelector('#resultado')
function btnOnclick(){
    const suma= Number(calculo1.value)+ Number(calculo2.value)
    p.innerText="resultado"+suma
    console.log(suma)
}

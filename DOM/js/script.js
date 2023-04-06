const h1=document.querySelector('h1')
const p=document.querySelector('.parrafo')
const pid=document.querySelector('#pid')
const input=document.querySelector('input')
console.log(input.value)
console.log({
    h1,
    p,
    pid
})

 
h1.innerHTML="PATITO"
p.innerText="parrafito.p1"
pid.innerHTML="Esto es un Id"
input.innerHTML="cambiando placeholder"
console.log(h1.getAttribute("class"))
input.value=77225399
const img =document.createElement('img')
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png')
pid.append(img)
let obj={
    backend:"Nodejs",
    frontEnd:"react"
};
function comprarCurso(curso){
    if (cursos[curso]) {
       console.log(cursos[curso])
       return     
    }
    console.warn("no hay curso")
}

let arr=[];
function objToArray(obj){
    const arr=Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
objToArray(obj)
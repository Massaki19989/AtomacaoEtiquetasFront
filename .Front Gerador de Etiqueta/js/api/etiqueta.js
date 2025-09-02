import getJob from "./getJob.js";

const formEtiqueta = document.getElementById('formEtiqueta')
const listPrint = document.querySelector('.lista-impressora')

async function imprimir(url){
    const formData = new FormData(formEtiqueta);
    let printer = document.getElementById('printer').value
    formData.append('printer', printer)
    listPrint.classList.remove('d-none')
    let intervalJob = setInterval(getJob, 2000);
    try{
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        clearInterval(intervalJob);
        listPrint.classList.add('d-none')
        document.querySelector('.message').classList.remove('d-none')

        document.location.reload();

    }catch(error){
        clearInterval(intervalJob);
        console.error('Error:', error);
    }
}

formEtiqueta.addEventListener('submit', (e)=>{
    e.preventDefault()
    try{
        let col = document.querySelector('#col').value

        if(col == "2"){
            let url = "http://127.0.0.1:5000/big"
            imprimir(url);
        }else if(col == "3"){
            let url = "http://127.0.0.1:5000"
            imprimir(url);
        }

        
    }catch(e){
        alert("Ocorreu um erro")
        console.log(e.message)
    }
    
})

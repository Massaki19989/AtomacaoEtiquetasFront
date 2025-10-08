import getJob from "./getJob.js";

const formEtiqueta = document.getElementById('formEtiqueta')
const listPrint = document.querySelector('.lista-impressora')
async function getPrinterSaved(){
    const response = await fetch("http://127.0.0.1:5000/config");
    const result = await response.json();
    return result
}
async function imprimir(url){
    const formData = new FormData(formEtiqueta);
    const getPrinter = await getPrinterSaved()
    let printer = getPrinter.col3
    let col = document.querySelector('#col').value
    if(col == '3' || col == 3){
        printer = getPrinter.col3
    }else if(col == '2' || col == 2){
        printer = getPrinter.col2
    }
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
            alert('iMPRIMINDO!!!')
            imprimir(url);
        }else if(col == "3"){
            let url = "http://127.0.0.1:5000"
            alert('iMPRIMINDO!!!')
            imprimir(url);
        }

        
    }catch(e){
        alert("Ocorreu um erro")
        console.log(e.message)
    }
    
})

const button2 = document.getElementById('btnOne');
const formEtiqueta2 = document.getElementById('printOne')

async function getPrinterSaved(){
    const response = await fetch("http://127.0.0.1:5000/config");
    const result = await response.json();
    return result
}

async function imprimir2(url){
    const getPrinter = await getPrinterSaved()
    const col = document.getElementById("colOne").value
    let printer = getPrinter.col3
    if(col == '3' || col == 3){
        printer = getPrinter.col3
    }else if(col == '2' || col == 2){
        printer = getPrinter.col2
    }
    
    const formData = {
        name: document.getElementById("nameP").value,
        price: document.getElementById("price").value,
        qtd: document.getElementById("qtd").value,
        col: col,
        printer: printer
    }

    try{
        if(document.getElementById('noCode2').value){
            formData.code = document.getElementById('noCode2').value
        }
    }catch(err){
        console.log(err.message)
    }
    


    try{
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        });

        document.querySelector('.message').classList.remove('d-none')
    
    }catch(error){
        console.error('Error:', error);
    }
}

formEtiqueta2.addEventListener('submit', (e)=>{
    e.preventDefault()
    try{
        imprimir2("http://127.0.0.1:5000/one");
    }catch(e){
        alert("Ocorreu um erro")
        console.log(e.message)
    }
    
})

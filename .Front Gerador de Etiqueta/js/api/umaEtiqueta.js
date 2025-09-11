const button2 = document.getElementById('btnOne');
const formEtiqueta2 = document.getElementById('printOne')


async function imprimir2(url){
    const printer = document.getElementById('printer').value
    const formData = {
        name: document.getElementById("nameP").value,
        price: document.getElementById("price").value,
        qtd: document.getElementById("qtd").value,
        col: document.getElementById("colOne").value,
        printer: printer
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
        let url = "http://127.0.0.1:5000/one"
        imprimir2(url);
    }catch(e){
        alert("Ocorreu um erro")
        console.log(e.message)
    }
    
})

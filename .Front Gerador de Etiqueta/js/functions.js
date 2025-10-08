
const file = document.getElementById('file');
const label = document.querySelector('label[for="file"]');

file.addEventListener('change', (event) => {
    let fileValue = file.value

    if(fileValue.length <= 0){
        const display = document.querySelector('.display');
        display.innerHTML = ``;
        display.style.display = 'none';
        document.getElementById('sheet').innerHTML=``
    }else{
        const excel = event.target.files[0];
        const readFile = new FileReader();

        readFile.onload = function(e){
            const dados = new Uint8Array(e.target.result)
            const workbook = XLSX.read(dados, { type: 'array' })

            const nomeDasAbas = workbook.SheetNames;

            for(let i = 0; i < nomeDasAbas.length; i++){
                document.getElementById('sheet').innerHTML+=`
                    <option value="${nomeDasAbas[i]}">${nomeDasAbas[i]}</option>
                `
            }
        }

        readFile.readAsArrayBuffer(excel)

        const fileName = excel.name;
        const display = document.querySelector('.display');
        display.textContent = `Arquivo Selecionado: ${fileName}`;
        display.style.display = 'block';
        label.innerHTML = 'Alterar Arquivo Excel';


    }
    
});

document.querySelector(".message button").addEventListener('click', ()=>{
    document.querySelector('.message').classList.add('d-none')
})

document.querySelector('.lista-impressora .close').addEventListener('click', ()=>{
    document.querySelector('.lista-impressora').classList.add('d-none')
})

document.querySelector('.config').addEventListener('click', ()=>{
    if(document.querySelector('.config-options').classList.contains('d-none')){
        document.querySelector('.config-options').classList.remove('d-none')
    }else{
        document.querySelector('.config-options').classList.add('d-none')
    }
    
})

document.querySelector('.config-options .close').addEventListener('click', ()=>{
    document.querySelector('.config-options').classList.add('d-none')
})

async function getPrinterSaved(){
    const response = await fetch("http://127.0.0.1:5000/config");
    const result = await response.json();
    return result
}


async function getPrinter() {
    const printerSelect2Cols = document.getElementById('2cols');
    const printerSelect3Cols = document.getElementById('3cols');
    const getPrinter = await getPrinterSaved()
    const url = "http://127.0.0.1:5000/printers"

    const resp = await fetch(url)

    if(resp.status != 400 && resp.status != 500 && resp.status != 401){
        const result = await resp.json();
        printerSelect2Cols.innerHTML = `<option value="${getPrinter.col2}" selected>${getPrinter.col2}</option>`;
        printerSelect3Cols.innerHTML = `<option value="${getPrinter.col3}" selected>${getPrinter.col3}</option>`;
        for(let i = 0; i < result.length; i++){
            if(result[i] != getPrinter.col2){
                printerSelect2Cols.innerHTML += `<option value="${result[i]}">${result[i]}</option>`;
                
            }
        }

        for(let i = 0; i < result.length; i++){
            if(result[i] != getPrinter.col3){
                printerSelect3Cols.innerHTML += `<option value="${result[i]}">${result[i]}</option>`;
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    getPrinter();
});
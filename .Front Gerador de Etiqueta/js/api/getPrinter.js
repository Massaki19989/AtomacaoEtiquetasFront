async function getPrinter() {
    const printerSelect = document.getElementById('printer');

    const url = "http://127.0.0.1:5000/printers"

    const resp = await fetch(url)

    if(resp.status != 400 && resp.status != 500 && resp.status != 401){
        const result = await resp.json();
        printerSelect.innerHTML = ``;
        for(let i = 0; i < result.length; i++){
            printerSelect.innerHTML += `<option value="${result[i]}">${result[i]}</option>`;
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    getPrinter();
});
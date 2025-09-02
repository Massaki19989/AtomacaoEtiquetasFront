const input = document.getElementById('file');
const button = document.getElementById('processButton');

button.addEventListener('click', async () => {
    if (!input.files.length) return alert('Selecione um arquivo Excel');

    const filePath = input.files[0].path;
    // Use a API exposta pelo preload.js
    const result = await window.api.processExcel(filePath);
    alert(result);
});
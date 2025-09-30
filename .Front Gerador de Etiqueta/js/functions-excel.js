try{
    function setupDropZone(dropId, inputId, lblId){
        const dropZone = document.getElementById(dropId);
        const fileInput = document.getElementById(inputId);

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, (event) => event.preventDefault());
            document.addEventListener(eventName, (event) => event.stopImmediatePropagation());
        });

        dropZone.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', (event) => {
            event.preventDefault();
            dropZone.classList.remove('dragover');

            const files = event.dataTransfer.files;
            if (files.length > 0) {
                fileInput.files = files;
            }

            document.getElementById(lblId).innerHTML = files[0].name;
        });

        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                document.getElementById(lblId).innerHTML = fileInput.files[0].name;
            } else {
                document.getElementById(lblId).innerHTML = 'Selecione o Arquivo';
            }
        });

    }

    setupDropZone('dropzone1', 'excel1', 'lblExcel1');
    setupDropZone('dropzone2', 'excel2','lblExcel2');
    setupDropZone('dropzone3', 'pedido', 'lblPedido');
    setupDropZone('dropzone4', 'venda','lblVenda');
}catch(e){
    console.log(e);
}
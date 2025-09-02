async function comparar(url, formData) {
    try{
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if(!response.ok) throw new Error(`Erro: ${response.status} - ${response.statusText}`);

        const result = await response.json();
        return result;

    }catch(e){
        console.error(e);
    }
}

document.querySelector('#compare').addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);
    console.log(formData);
    comparar('http://localhost:5000/excel/comparar', formData).then(data => {
        console.log(data);
    });
});
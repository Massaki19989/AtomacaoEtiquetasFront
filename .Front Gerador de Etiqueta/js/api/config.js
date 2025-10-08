const url = "http://127.0.0.1:5000/config/update"

async function saveConfig(data){
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message)
    }catch(error){
        console.error('Error:', error);
    }
}

document.getElementById('configForm').addEventListener('submit', (e)=>{
    e.preventDefault()
    const col2 = document.getElementById('2cols').value
    const col3 = document.getElementById('3cols').value
    const data = {
        col2: col2,
        col3: col3
    }
    saveConfig(data)
})
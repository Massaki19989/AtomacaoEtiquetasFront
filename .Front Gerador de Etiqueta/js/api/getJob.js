const jobList = document.getElementById('jobList');

export default async function getJob() {
    const printerSelect = document.getElementById('printer');

    const url = `http://127.0.0.1:5000/printers/${encodeURIComponent(printerSelect.value)}/jobs`

    const resp = await fetch(url)

    if(resp.status != 400 && resp.status != 500 && resp.status != 401){
        const result = await resp.json();
        result.map(job => {
            jobList.innerHTML = `<li>Imprimindo: ${job.document}</li>`
        })
        
    }
}

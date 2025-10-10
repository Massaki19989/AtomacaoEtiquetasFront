document.querySelector('body').innerHTML += `<div class="carregando"><h2>Carregando Aplicativo...</h2></div>`
let intervalId = setInterval(testApi, 5000)
testApi()

async function testApi() {
    try{
        let resp = await fetch("http://localhost:5000/")
        console.log("API ON")
        document.querySelector('.carregando').remove()
        clearInterval(intervalId)
    }catch(e){
        console.log("API OFF")
    }
}



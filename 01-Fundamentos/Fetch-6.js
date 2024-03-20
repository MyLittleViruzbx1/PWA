

fetch('noEncontrado.html')
    .then((resp) => resp.text()) 
    .then((html) => {
        // console.log(html)
        let body = document.querySelector('body');
        body.innerHTML = html;
    })
        .catch( error =>{
            console.log('Error en la carga')
            console.log(error)
        })
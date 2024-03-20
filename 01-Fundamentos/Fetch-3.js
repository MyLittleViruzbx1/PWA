// peticion GET
let usuario = {
    nombre: 'Wukky',
    edad:22
}

fetch('https://reqres.in/api/usuarios',{
    method: 'POST', //PUT
    body: JSON.stringify(usuario),//data
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion')
});



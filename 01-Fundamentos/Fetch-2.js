// peticion GET

fetch('https://reqres.in/api/users')
    .then (resp =>{
        resp.json().then(console.log)
        // console.log(resp);
    })
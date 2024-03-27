

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg =>{
            
                    Notification.requestPermission().then(resultado =>{
                        console.log(resultado);
                reg.showNotification('Hola Mundo PWA');             
                    })
           
            
        });
}


// fetch('https://reqres.in/api/users')
//     .then(resp => resp.text() )
//     .then(console.log);
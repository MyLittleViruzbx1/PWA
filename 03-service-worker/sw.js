// Ciclo de vida del SW

//Descargamos assets
//Creamos un cache

self.addEventListener('install', event =>{
    console.log(event)
    console.log('SW:instalando service workert ')

    const instalacion = new Promise ((resolve, reject) =>{
        setTimeout( ()=>{
            console.log('SW: Instalaciones terminadas')
        },10);
        self.skipWaiting();
        resolve();
    });

    event.waitUntil(instalacion)
})

//cuando el service workert toma la
self.addEventListener('activate', event =>{
    //Borrar cache viejo
    console.log('Sw: Activo y listo para controlar la app PWA')
})


//FETCH: Manejo de peticiones HTTP

self.addEventListener('fetch', event =>{
    // console.log('SW:', event.request.url);

    // if(event.request.url.includes ('https://reqres.in/')){
    //     const resp = new Response(`{ok:fase, mensaje:'jajaja}`);
    //     event.respondWith(resp);
    // }




});


//SYNC: Cuando recuperamos la conexion a internet

self.addEventListener('sync', event =>{
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
})


//PUSH: Manejar las push notifications

self.addEventListener('push', event =>{
    console.log('Notificacion recibida');
})
self.addEventListener('fetch', event=>{
    

    if(event.request.url.includes('main.jpg') ){

        let resp = fetch('img/main-patas-arriba.jpg');

        event.respondWith(resp);
      
    }

    // if(event.request.url.includes('style.css')){
    //     let respuesta = new Response(`
    //     body {
    //         background-color:red !important;
    //         color:pink;
    //     }`,{
    //         headers: {
    //             'Content-type':'text/css'
    //         }
    //     });
    //     event.respondWith(respuesta)
    // }





    // console.log(fotoreq);

    // if (event.request.url.includes('.jpg')){

        // let fotoreq = fetch('img/main.jpg');
        // let fotoreq = fetch(event.request.url);
        // let fotoreq = fetch(event.request);
            // event.respondWith( fotoreq );
    // }
        // else {
    //     event.respondWith( fetch(event.request) );
    // }


});
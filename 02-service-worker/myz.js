self.addEventListener('fetch', event=>{
    
    // console.log(event);

    if (event.request.url.includes('.jpg')){

        // let fotoreq = fetch('img/main.jpg');
        // let fotoreq = fetch(event.request.url);
        let fotoreq = fetch(event.request);
            event.respondWith( fotoreq );
    }
        // else {
    //     event.respondWith( fetch(event.request) );
    // }


});
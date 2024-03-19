function sumarUno(numero){

    return promesa = new Promise((resolve, reject) =>{
        
        if(numero >= 7){
            reject('El numero es muy alto');
        }


        setTimeout(function(){
            resolve( numero + 1)
        }, 800);
    });
   
}
sumarUno(5)
    .then(sumarUno())
    .then(sumarUno())
    .then(nuevoNumero =>{
            console.log(nuevoNumero);
            return sumarUno(nuevoNumero);
        })
        .then(nuevoNumero =>{
                console.log(nuevoNumero);
                return sumarUno(nuevoNumero);
            })
            .then(nuevoNumero =>{
                    console.log(nuevoNumero)
                })
                .catch(error =>{
                    console.log(' Error en promesas ');
                    console.log(error);
                })
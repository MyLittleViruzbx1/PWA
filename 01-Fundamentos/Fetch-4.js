let img = document.querySelector('img');


fetch('superman-230127-151808.png')
    .then( resp => resp.blob())
    .then ( imagen =>{
        // console.log(imagen)
        var imgPath = URL.createObjectURL(imagen);

        img.src= imgPath;
    });
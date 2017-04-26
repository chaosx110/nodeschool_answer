const fs = require('fs');
const path = require('path');

fs.readdir('./',function(err,files){
    files.filter(file=>{
        return path.extname(file) === `.${type}`;
    }).forEach(filename=>{
        console.log(filename);
    })
})

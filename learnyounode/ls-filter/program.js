const fs = require('fs');

var lsFilter = function(path,type){
    fs.readdir(path,function(err,files){
        files.filter(file=>{
            return file.split()
        })
    })
}

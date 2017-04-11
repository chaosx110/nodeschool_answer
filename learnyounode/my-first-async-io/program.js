const fs = require('fs');

fs.readFile('path/to/file','utf-8',function(err,data){
    console.log(data);
});

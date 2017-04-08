const electron = require('electron');
const remote = require('electron').remote;
const fs = require('fs');

function save(){
    remote.getCurrentWebContents().hostWebContents.printToPDF({
        portrait:true
    },function(err,data){
        fs.writeFile('annotation.pdf',data,function(err){
            if(err) alert('err generating pdf!' + err.message)
            else alert('pdf saved!')
        })
    })
}

electron.app.on('ready',function(){

    var mainWindow = new electron.BrowserWindow({width:600,height:800});
    mainWindow.loadURL('file://'+__dirname+'/index.html');
    mainWindow.addListener('keydown',function(e){
        if(e.keyCode == 80) save();
    })
})


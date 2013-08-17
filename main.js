global.$ = $;

var addressBar = require('addressBar')
    ,folderView = require('folderView')
    ,shell = require('nw.gui').Shell;

$(document).ready(function() {
    var folder = new folderView.Folder($('#files'))
        ,bar = new addressBar.AddressBar($('#bar'));

    folder.open(process.cwd());
    bar.set(process.cwd());

    folder.on('navigate', function(dir, mime) {
        if (mime.type == 'folder') {
            bar.enter(mime);
        } else {
            shell.openItem(mime.path);
        }
    });

    bar.on('navigate', function(dir) {
        folder.open(dir);
    });
});

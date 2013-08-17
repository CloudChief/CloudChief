global.$ = $;

var addressBar = require('addressBar')
    ,folder_view = require('folderView')
    ,shell = require('nw.gui').Shell;

$(document).ready(function() {
    var folder = new folder_view.Folder($('#files'))
        ,addressBar = new addressBar.AddressBar($('#addressBar'));

    folder.open(process.cwd());
    addressBar.set(process.cwd());

    folder.on('navigate', function(dir, mime) {
        if (mime.type == 'folder') {
            addressBar.enter(mime);
        } else {
            shell.openItem(mime.path);
        }
    });

    addressBar.on('navigate', function(dir) {
        folder.open(dir);
    });
});

(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    var Config = {};
    
    Config.host = "31.220.54.16";
    Config.port = 80;
    Config.urlPrefix = '/spika';
    Config.socketNameSpace = '/spika';

    Config.imageDownloadURL = "http://" + Config.host + "/:" + Config.port + Config.urlPrefix + "/media/images/";
    Config.noavatarImg = "http://" + Config.host + ":" + Config.port + Config.urlPrefix + "/img/noavatar.png";

    Config.chatDatabaseUrl = "mongodb://localhost/simplemessenger";
    Config.dbCollectionPrefix = "spika_";
    
    Config.uploadDir = 'public/uploads/';
    Config.sendAttendanceMessage = true;
    
    Config.stickerBaseURL = 'http://spika.chat';
    Config.stickerAPI = Config.stickerBaseURL + '/api/v2/stickers/56e005b1695213295419f5df';
    
    // Exports ----------------------------------------------
    module["exports"] = Config;

})((this || 0).self || global);

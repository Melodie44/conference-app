var service = require("../../common/talk.service.js");

class SpeakerList{

    static render(idView){
        console.log(idView);
        service.findAllSessions()
        .then(sessions => {
            console.log(sessions);
            sessions.forEach(s => {
                console.log(s.nom);
                document.getElementById(idView).innerHTML += "<p>"+s.nom+"</p>";
            }); 
        });
    }
}
exports.SpeakerList = SpeakerList;
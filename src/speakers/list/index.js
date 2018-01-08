var service = require("../../common/talk.service.js");

class SpeakerList{

    static render(idView){
        console.log(idView);
        service.findAllSpeakers()
        .then(speakers => {
            console.log(speakers);
            speakers.forEach(s => {
                console.log(s.prenom);
                document.getElementById(idView).innerHTML += "<p>"+s.prenom+"</p>";
            }); 
        });
    }
}
exports.SpeakerList = SpeakerList;
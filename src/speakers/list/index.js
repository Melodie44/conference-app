var service = require("../../common/talk.service.js");

export class SpeakerList{

    render(idView){
        service.findAllSpeakers()
        .then(speakers => {
            speakers.forEach(s => {
                document.getElementById(idView).innerHTML += "<p>"+s.firstname+" "+s.lastname+"</p>";
            }); 
        });
    }
}
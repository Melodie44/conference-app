var service = require("../../common/talk.service.js");

export class SpeakerList{

    render(idView){
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
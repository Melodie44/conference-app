var service = require("./common/talk.service.js");
var partialHtml = require("./layout/index.js");
var speakersList = require("./speakers/list/index.js")
var sessionsList = require("./sessions/list/index.js")

/*service.findAllSpeakers()
.then(speakers => speakers.forEach(s => console.log(s.prenom)));*/

partialHtml.Layout.render();

speakersList.SpeakerList.render("main-view");

var router = () => {
    if (location.hash == '#speakers-list') {
    // TODO afficher vue liste des présentateurs
        speakersList.SpeakerList.render("main-view");
    } else if (location.hash == '#sessions-list') {
    // TODO afficher vue liste des sessions
        sessionsList.SpeakerList.render("main-view");
    } else {
    // TODO afficher vue par défaut
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});


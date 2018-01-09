/*import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';*/

var service = require("./common/talk.service.js");
var partialHtml = require("./layout/index.js");
var speakersList = require("./speakers/list/index.js")
var sessionsList = require("./sessions/list/index.js")
import { Layout } from './layout';
import { SpeakerList } from './speakers/list';
import { SessionList } from './sessions/list';

const layout = new Layout();

/*service.findAllSpeakers()
.then(speakers => speakers.forEach(s => console.log(s.prenom)));*/

layout.render();

/*speakersList.SpeakerList.render("main-view");

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
});*/


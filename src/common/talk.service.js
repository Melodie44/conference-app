
function findAllSpeakers(){

    var myInit = {
        method: 'GET'
    }

    return fetch('http://localhost:3000/speakers', myInit)
    .then(function(resp){
        return resp.json();
    });
    
}
exports.findAllSpeakers = findAllSpeakers;

function findAllSessions(){
    
    var myInit = {
        method: 'GET'
    }
    
    return fetch('http://localhost:3000/sessions', myInit)
    .then(function(resp){
        return resp.json();
    });
        
}
exports.findAllSessions = findAllSessions;

function findASpeaker(){

    var myInit = {
        method: 'POST'
    }

    return fetch('http://localhost:3000/speaker', myInit)
    .then(function(resp){
        return resp.json();
    });
}
exports.findASpeaker = findASpeaker;
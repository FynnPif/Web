let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams";
let urlPlayers = "https://api.football-data.org/v2/teams/18";
let urlLeagues = "https://api.football-data.org/v2/competitions";

function teams(){
    fetch(urlTeams, {
        headers: {
            "x-auth-token": "0293f130b1874ec0b8fb31405ff7017c"
        }
    })
    .then(repsonse => repsonse.json())
    .then(function(data) {
        let html = ""
        data.teams.forEach(element => {
            html += "<li> <button>" + element.name + "</button> </li>"        
        });
        document.getElementById("content").innerHTML = html;
    })
}


function players(){
    fetch(urlPlayers, {
        headers: {
            "x-auth-token": "0293f130b1874ec0b8fb31405ff7017c"
        }
    })
    .then(repsonse => repsonse.json())
    .then(function(data) {
        let html = ""
        data.squad.forEach(element => {
            html += "<li>" + element.name + "</li>"        
        });
        document.getElementById("content").innerHTML = html;
    })
}

function leagues(){
    fetch(urlLeagues, {
        headers: {
            "x-auth-token": "0293f130b1874ec0b8fb31405ff7017c"
        }
    })
    .then(repsonse => repsonse.json())
    .then(function(data) {
        let html = ""
        data.competitions.forEach(element => {
            html += "<li id='list'>" + element.name + "</li>"        
        });
        document.getElementById("content").innerHTML = html;
    })
}
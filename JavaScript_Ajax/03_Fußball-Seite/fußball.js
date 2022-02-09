let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams";
let urlPlayers = "https://api.football-data.org/v2/teams/18";

fetch(urlTeams, {
    headers: {
        "x-auth-token": "0293f130b1874ec0b8fb31405ff7017c"
    }
})
.then(repsonse => repsonse.json())
.then(function(data) {
    let html = ""
    data.teams.forEach(element => {
        html += "<li>" + element.name + "</li>"        
    });
    document.getElementById("team##s").innerHTML = html;
})

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
    document.getElementById("teams").innerHTML = html;
})
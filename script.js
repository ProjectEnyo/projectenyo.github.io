let serverIP = "mc.projectenyo.eu"
let serverPort = "25565"
let api = "https://eu.mc-api.net/v3/server/ping/"

window.addEventListener("load", function() {
	let ping = api + serverIP + ":" + serverPort
	fetch(ping)
		.then(response => response.json())
		.then(data => {
			document.getElementById("online-status").innerHTML = data.online ? "<span class=\"online\">Online</span>" : "<span class=\"offline\">Offline</span>"
			document.getElementById("players-online").innerHTML = data.players.online + "/" + data.players.max

			// get current map from motd.
			// use API to get position of current
			// map and change it accordingly.
			document.getElementById("current-map").innerHTML = data.description.extra[2].text.trimEnd()

		})
		.catch(error => {
			document.getElementById("online-status").innerHTML = "<span class=\"offline\">Offline</span>"
			console.log(error)
		})
})

let serverIP = "pvp.projectenyo.eu"
let serverPort = "25565"
let api = "https://eu.mc-api.net/v3/server/ping/"

window.addEventListener("load", function() {
	let ping = api + serverIP + ":" + serverPort
	fetch(ping)
		.then(response => response.json())
		.then(data => {
			document.getElementById("online-status").innerHTML = data.online ? "<span class=\"online\">Online</span>" : "<span class=\"offline\">Offline</span>"
			document.getElementById("players-online").innerHTML = data.players.online + "/" + data.players.max

			// check if bukkit_extra exists
			if (data.hasOwnProperty("bukkit_extra")) {
				let key = Object.keys(data.bukkit_extra.pgm)[0]
				document.getElementById("current-map").innerHTML = data.bukkit_extra.pgm[key].map.name

			} else { // parse motd otherwise
				let map = data.description
				let startIndex = 3
				let endIndex = 4
				map = map.split('»')[1]
				map = map.substring(startIndex, map.length - endIndex)
				document.getElementById("current-map").innerHTML = map
			}
		})
		.catch(error => {
			document.getElementById("online-status").innerHTML = "<span class=\"offline\">Offline</span>"
			console.log(error)
		})
})

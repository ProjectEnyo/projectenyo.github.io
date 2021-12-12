let serverIP = "pvp.projectenyo.eu"
let serverPort = "25565"
let api = "https://eu.mc-api.net/v3/server/ping/"

window.addEventListener('load', function() {
	let ping = api + serverIP + ":" + serverPort
	fetch(ping)
		.then(response => response.json())
		.then(data => {
			let key = Object.keys(data.bukkit_extra.pgm)[0]
			document.getElementById("online-status").innerHTML = data.online ? "Online" : "Offline"
			document.getElementById("players-online").innerHTML = data.players.online + "/" + data.players.max
			document.getElementById("current-map").innerHTML = data.bukkit_extra.pgm[key].map.name
		})
		.catch(error => {
			document.getElementById("online-status").innerHTML = "Offline"
			console.log(error)
		})
})

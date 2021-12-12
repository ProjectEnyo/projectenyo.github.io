let pingUrl = "https://eu.mc-api.net/v3/server/ping/pvp.projectenyo.eu"

window.addEventListener('load', function() {
	fetch(pingUrl)
		.then(response => response.json())
		.then(data => {
			let players = data.players.online
			let maxPlayers = data.players.max
			let serverStatus = (data.online == true) ? "Online" : "Offline"
			let key = Object.keys(data.bukkit_extra.pgm)[0]
			let map = data.bukkit_extra.pgm[key].map.name
			document.getElementById("online-status").innerHTML = serverStatus
			document.getElementById("players-online").innerHTML = players + "/" + maxPlayers
			document.getElementById("current-map").innerHTML = map
		})
		.catch(error => {
			document.getElementById("online-status").innerHTML = "Offline"
			console.log(error)
		})
})

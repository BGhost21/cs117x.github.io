
function search() {
	var free_rooms = []
	var week = document.getElementById("week").value;
	var day = document.getElementById("day").value;
	var period = document.getElementById("period").value;
	var container = document.getElementById("free-rooms");


	var query = week + day + period

	for (var i = 0; i < data.length; i++) {
		if (data[i].FIELD1 == query) {
			for (x in data[i]) {
				free_rooms.push(x)
				number = data[i]
			}
		}	
	}
	for (room_location in free_rooms) {
		var t = document.createElement('li');
		t.textContent = data[room_location];
		container.appendChild(t);
	}
	
}

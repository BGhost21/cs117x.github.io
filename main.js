
function search() {
	
	var week = document.getElementById("week").value;
	var day = document.getElementById("day").value;
	var period = document.getElementById("period").value;

	var query = week + day + period

	for (var i = 0; i < data.length; i++) {
		if (data[i].FIELD1 == query) {
			for (x in data[i]) {
				console.log(x)
			}
		}	
	}
}

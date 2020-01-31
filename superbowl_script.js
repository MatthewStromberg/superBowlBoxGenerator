function startTheShow() {

	var globalArray = Array();
	var nfc_scores = Array();
	var afc_scores = Array();


	function createTable() {
		var table = document.getElementById("demo");
		table.innerHTML = "";
		for (var i = 0; i < 11; i++) {
			var row = document.createElement("tr");
			for (var j = 0; j < 11; j++) {
				var col = document.createElement("td");
				col.setAttribute('class', 'text-center');
				if (i == 0) {
					if (j == 0)
						col.innerHTML = "X";
					else {
						col.innerHTML = nfc_scores[j - 1];
					}
				} else {
					if (j == 0)
						col.innerHTML = afc_scores[i - 1]
					else {
						col.innerHTML = globalArray[((i - 1) * 10) + (j - 1)];
					}
				}
				row.appendChild(col);
			}
			table.appendChild(row);

		}


	}

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	function readText() {
		var lines = $('#textContent').val().split('\n');
		for (var pair in lines) {
			// console.log(lines[pair])
			var item = lines[pair].split(',');
			var name = item[0];
			var numBoxes = item[1];
			var localArray = Array(Number(numBoxes)).fill(String(name));
			nfc_scores = shuffle(Array.from(Array(10).keys()))
			afc_scores = shuffle(Array.from(Array(10).keys()))

			globalArray = globalArray.concat(localArray);
		}
		globalArray = shuffle(globalArray)
		console.log(globalArray)
		if (globalArray.length != 100)
			alert("Warning. You do not have 100 boxes")

		// console.log(lines)
		// alert(lines);
	}

	readText();
	createTable();


}
$('#mySubmit').on('click', function (event) {
  (function myLoop (i) {
   setTimeout(function () {
      startTheShow();          //  your code here
      if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
    }, 100)
  })(10);
});

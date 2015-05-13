'use strict';

(function () {
	document.getElementById("hack1").style.display = "none";
	document.getElementById("hack2").style.display = "none";
	document.getElementById("hack3").style.display = "none";

})();


function mostrarParrafos(mostrarParrafo1, mostrarParrafo2, mostrarParrafo3) {

	setTimeout(function () {
		mostrarParrafo1(hack1);
	}, 0);

	setTimeout(function () {
		mostrarParrafo2(hack2);
	}, 6000);

	setTimeout(function () {
		mostrarParrafo3(hack3);
	}, 15000);


	function mostrarParrafo1(hack1) {
		document.getElementById("hack1").style.display = "block";
	}

	function mostrarParrafo2(hack2) {
		document.getElementById("hack2").style.display = "block";
	}

	function mostrarParrafo3(hack3) {
		document.getElementById("hack3").style.display = "block";
	}
};
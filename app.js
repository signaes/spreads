"use strict";

var app = (function() {

	var  spreads, i, limit;

	function buildSpreads(numberOfPages) {

		var pages, couple;

		pages = numberOfPages;

		limit = pages / 2;

		spreads = [];

		for (i = 0; i < limit; i += 1) {

			couple = [(i + 1), (pages - i)];

			spreads.push(couple);

		}

		return spreads;

	}

	function display(target) {

		var current;

		current = "";

		for (i = 0; i < limit; i += 1) {

			current += i % 2 !== 0 ? "<div class='spread'><div class='page'>" + spreads[i][0] + "</div><div class='page'>" + spreads[i][1] + "</div></div>" : "<div class='spread'><div class='page'>" + spreads[i][1] + "</div><div class='page'>" + spreads[i][0] + "</div></div>";

		}

		target.innerHTML = current;

	}

	function error(target, msg) {

		var message;

		message = msg || "O n&uacute;mero de p&aacute;ginas deve ser um m&uacute;ltiplo de 4.";

		target.innerHTML = message;

	}

	function run() {

		var pages, submit, results, numberOfPages;

		pages = document.getElementById("pages");

		submit = document.getElementById("submit");

		results = document.getElementById("results");

		function proceed() {

			numberOfPages = pages.value;

	        if (numberOfPages % 4 === 0 && numberOfPages < 10000) {

	          buildSpreads(numberOfPages);

	          display(results);

	        } else {

	          if (numberOfPages >= 10000) {
	          	error(results, "mais de 10.000 p&aacute;ginas?");
	          } else {
	          	error(results);
	          }	          

	        }

		}

		pages.addEventListener("keyup", function(){

		  proceed();

		}, false);

		submit.addEventListener("click", function(){
          
          proceed();

        }, false);

	}


	run();


}());

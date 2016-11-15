var RussianRoulette = {};

$(document).ready(
	function(){
		$('#shotPistol').click(function(event) {
			event.preventDefault();
			RussianRoulette.getResult();
		});
	}
);

/**
 * Fetch the result of the roulette from the server
 */
RussianRoulette.getResult = function() {
	var JSONRequest = JSON.stringify(
		{
			'cylinder' : $("input:radio[name=cylinderPosition]:checked").val()
		}
	);
	$.post('apps/RussianRoulette/GetResult.php', JSONRequest)
		.done(function(data) {
			if(data.hasOwnProperty('errorMsg')) {
				RussianRoulette.showResult(data.errorMsg);
			} else {
				data.hit ? RussianRoulette.showResult('BOM') : RussianRoulette.showResult('Du klarade dig');
			}
		})
		.fail(function() {
			RussianRoulette.showResult('Kunde inte ansluta till servern');
		});
};

/**
 * Print a result to the result div
 *  
 * @param string result
 * String to print as result
 */
RussianRoulette.showResult = function(result) {
	$('#result').empty().append('<p>' + result + '</p>');
};

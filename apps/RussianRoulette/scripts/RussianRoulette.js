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
 * A function to fetch the result of the roulette from the server and display
 */
RussianRoulette.getResult = function() {
	var JSONRequest = JSON.stringify(
		{
			'cylinder' : $("input:radio[name=cylinderPosition]:checked").val()
		}
	);
	var request = $.post('apps/RussianRoulette/GetResult.php', JSONRequest);
	request.done(function(data) {
		if(data.hasOwnProperty('errorMsg')) {
			RussianRoulette.showResult(data.errorMsg);
		} else {
			data.hit ? RussianRoulette.showResult('BOM') : RussianRoulette.showResult('Du klarade dig');
		}
	});
	request.fail(function() {
		RussianRoulette.showResult('Kunde inte ansluta till servern');
	});
};

RussianRoulette.showResult = function(result) {
	$('#result').empty().append('<p>' + result + '</p>');
};

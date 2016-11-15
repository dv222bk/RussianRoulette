<?php
    header('Content-Type: application/json');
	
	$request = file_get_contents('php://input');
	
	$decodedJSON = json_decode($a_encodedJSON);
	
	if(json_last_error() != JSON_ERROR_NONE) {
		echo json_encode(['error' => 'Did not recieve a valid JSON']);
	}
	
	if(intval($decodedJSON->cylinder) < 1 || intval($decodedJSON->cylinder) > 6) {
		echo json_encode(['error' => 'Did not recieve a valid cylinder choice']);
	}
	
	$result = FALSE;
	if(mt_rand(1,6) == $decodedJSON->cylinder) {
		$result = !$result;
	}
	
	echo json_encode(['result' => $result]);	
?>

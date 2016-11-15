<?php

header('Content-Type: application/json');

$request = file_get_contents('php://input');

$decodedJSON = json_decode($request);

if(json_last_error() != JSON_ERROR_NONE) {
	echo json_encode(['errorMsg' => 'Did not recieve a valid JSON']);
	exit();
}

if(intval($decodedJSON->cylinder) < 1 || intval($decodedJSON->cylinder) > 6) {
	echo json_encode(['errorMsg' => 'Did not recieve a valid cylinder choice']);
	exit();
}

$result = FALSE;
if(mt_rand(1,6) == $decodedJSON->cylinder) {
	$result = !$result;
}

echo json_encode(['hit' => $result]);

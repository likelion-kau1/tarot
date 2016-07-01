?php

$error = false;

$rm_name 	= $_POST['rmname'];	
if((filter_var($rm_name, FILTER_SANITIZE_STRING) === FALSE) || empty($rm_name)){
	$error = true;
}

$rm_email 	= $_POST['rmemail'];
if((filter_var($rm_email, FILTER_SANITIZE_EMAIL) === FALSE) || empty($rm_email)){
	$error = true;
}

$rm_message = $_POST['rmfitness']; 
if((filter_var($rm_message, FILTER_SANITIZE_STRING) === FALSE) || empty($rm_message)){
	$error = true;
}
	

$ret  = true;	
if(!$error){
	$list = array($rm_name, $rm_email, $rm_message) ;	
	$fp = fopen('contacts.csv', 'at');
	$ret = fputcsv($fp, $list);
	fclose($fp);
}

if($ret === FALSE) $error = true;


if($error) echo '0';
else echo '1'; //success

die();

?>
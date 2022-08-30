<?php
  //echo implode(',', $_POST);
  $bytes = file_put_contents("state_json-php.json", $_POST); 
  echo $_POST;

?>
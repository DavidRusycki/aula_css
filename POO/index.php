<?php
require_once('a.php');

$oLink = new a('https://google.com', 'Google');

$oLink->setStyle('color:white;');
$oLink->setTarget('_blank');

echo $oLink;
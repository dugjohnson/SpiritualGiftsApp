<?php

// $jsonstring = file_get_contents('php://input');
$jsonstring = $_POST['surveyData'];
require_once("Zend/Loader.php");
/*
Zend_Loader::loadClass('Zend_Db_Adapter_Pdo_Mysql');
Zend_Loader::loadClass('Zend_File_Transfer_Adapter_Http');
Zend_Loader::loadClass('Zend_Filter_File_Rename');
*/
Zend_Loader::loadClass('Zend_Mail');
Zend_Loader::loadClass('Zend_Mail_Transport_Smtp');

if(isset($jsonstring)){
    $message =   '<p>Here are your results for '.$jsonstring['name'].' at '.$jsonstring['email'].'</p>';
    $message .= '<table><thead><tr><td>Spiritual Gift</td><td>Score</td></tr></thead><tbody>';
    foreach ($jsonstring['categories'] as $category) {
       $message .= '<tr><td>'.$category['description'].'</td><td>'.$category['score'].'</td></tr>';
    }
    $message .= '</tbody></table>';
    $message .= '<p>You can get a more complete explanation of spiritual gifts by contacting Frisco Bible Fellowship directly';
    $message .= ' and by downloading <a href="http://gifts.asknice.com/resources/Discovery.pdf">Discovery PDF by clicking here</a>';
    $message .= ' or go directly to gifts.asknice.com/resource/Discover.pdf in your browser.</p>';
    SendEmailEntry($message,$jsonstring['email']);
}
function SendEmailEntry($entrymessage,$emailto){

    $mail = new Zend_Mail();
    $emailto = filter_var($emailto, FILTER_SANITIZE_EMAIL);
    $mail->setBodyHtml($entrymessage);
    $mail->setFrom('noreply@asknice.com', 'Frisco Bible Apps no-reply');
    $mail->addTo($emailto, '');
    $mail->addBcc('doug@asknice.com', 'Webmaster');
    $mail->addCc('SSipes@friscobible.com', 'Summer Sipes');
    $mail->setSubject('Your spiritual gifts survey results from Frisco Bible Fellowship');
    $mail->send();
}
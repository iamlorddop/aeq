<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = 'username@gmail.com';
$mail->Password = 'password';

$mail->setFrom('username@gmail.com', 'username');
$mail->addAddress('username@gmail.com');

$mail->Subject = 'Консультация';

$body = '<h1>Данные заявки:</h1>';

if (trim(!empty($_POST['name']))) {
	$body.='<p><strong>Имя: </strong>'.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))) {
	$body.='<p><strong>E-mail: </strong>'.$_POST['email'].'</p>';
}
if (trim(!empty($_POST['phone']))) {
	$body.='<p><strong>Телефон: </strong>'.$_POST['phone'].'</p>';
}
if (trim(!empty($_POST['question']))) {
	$body.='<p><strong>Вопрос: </strong>'.$_POST['question'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
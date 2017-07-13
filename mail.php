<?php

// $recepient = "jijalikk@gmail.com";
// $sitename = "Название сайта";

$name = $_POST["name"];
$phone = $_POST["phone"];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

echo $name;
echo "<br>";
echo $phone;

mail("jijalikk@gmail.com", "Заявка с сайта", "ФИО:".$name.". Phone: ".$phone ,"From: example2@mail.ru \r\n");

// $message = "Имя: $name \nТелефон: $phone;

// $pagetitle = "Новая заявка с сайта \"$sitename\"";
// mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
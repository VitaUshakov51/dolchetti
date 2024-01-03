<?php

    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];

	$to = "vitavita-98@yandex.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Дольчетти - Заявка c сайта";


	$msg="
	У вас новая заявка:
    Имя: $name
    Телефон: $phone
    Почта: $email ";
	mail($to, $subject, $msg, "From: $to ");

	header('Location:http://a0903150.xsph.ru/#form');
?>


<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "pkxsahoo@gmail.com"; 
  $subject = "New Contact Form Submission";
  $headers = "From: $email";

  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Message:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "success"; 
  } else {
    echo "error";
  }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "pkxsahoo@gmail.com"; // Replace this with your email address
  $subject = "New Contact Form Submission";
  $headers = "From: $email";

  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Message:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "success"; // Send a response back to the client to indicate success
  } else {
    echo "error";
  }
}
?>

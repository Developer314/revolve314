<?php
$to = "manup.rav@gmail.com";
$subject = "Message From Revolve 314 Site";
$message = '
Name : '.$_POST['userName'].'
Email : '.$_POST['userEmail'].'.
Message :'.$_POST['userMessage'];
$headers = "From: ".$_POST['userEmail']."\r\n";

if(trim($_POST['userEmail']) == '' or trim($_POST['userMessage']) == ''){
    echo '{
  "type": "error",
  "text": "Please fill all fields"
}';
    die();
}

mail($to, $subject, $message, $headers);

if(mail($to, $subject, $message, $headers)){
    echo "Email sent successfully!";

    echo '{
        "type": "success",
        "text": "Thanks for Contacting Us, We will contact you soon"
      }';
          die();


} else {
    echo '{
        "type": "error",
        "text": "Email Sending failed, Please try again later or Whatsapp me at 918907289865"
      }';
      die()
}
die();
?>
<?php
if (isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']) {
  $secret = '6Lf1AKUZAAAAAOQfP1wz1QmWxMwn2UlhfDWbICnD';
  $ip = $_SERVER['REMOTE_ADDR'];
  $response = $_POST['g-recaptcha-response'];
  $rsp = file_get_contents("http://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip");
  $arr = json_decode($rsp, TRUE);
  if ($arr['success']) {
if(isset($_POST['submit'])){
$to = "lex-kosta@yandex.kz";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$first_name = $_POST['first_name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='http://lexkosdl.beget.tech/test/'>Вернуться на сайт.</a>";

}
  } else {
  echo "Проверьте форму на ошибки!";}
}
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://lexkosdl.beget.tech/test/");}
window.setTimeout("changeurl();",3000);
</script>
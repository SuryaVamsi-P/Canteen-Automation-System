<?php
session_start();
session_destroy();
header("Location: Webpage_Login.html");
exit();
?>
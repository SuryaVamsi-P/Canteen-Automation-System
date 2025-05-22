<?php
// connect.php - Central DB connection file

$host = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "canteen_db";

// Create connection
$conn = new mysqli($host, $db_user, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: set character set
$conn->set_charset("utf8");

// Log successful connection
// echo "Database connection successful.";
?>
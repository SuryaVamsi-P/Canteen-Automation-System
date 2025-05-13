<?php
session_start();

// Check if any user is logged in
if (isset($_SESSION['admin'])) {
    header("Location: admin_dashboard.php");
    exit();
} elseif (isset($_SESSION['employee'])) {
    header("Location: employee_dashboard.php");
    exit();
} elseif (isset($_SESSION['customer'])) {
    header("Location: customer_dashboard.php");
    exit();
} else {
    // Not logged in, redirect to main login page
    header("Location: Webpage_Login.html");
    exit();
}
?>

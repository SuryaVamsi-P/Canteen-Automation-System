<?php
session_start();
if (!isset($_SESSION['employee'])) {
    header("Location: emp_login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Employee Dashboard</title>
    <link rel="stylesheet" href="employee_module.css">
</head>
<body>
    <div class="employee-header">
        <h1>Welcome, Employee</h1>
        <a href="logout.php"><button class="action">Logout</button></a>
    </div>
    <div class="dashboard-content">
        <p>Check and update today's orders.</p>
    </div>
</body>
</html>

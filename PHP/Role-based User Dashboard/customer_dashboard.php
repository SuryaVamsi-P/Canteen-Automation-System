<?php include 'connect.php'; ?>
<?php
session_start();
if (!isset($_SESSION['customer'])) {
    header("Location: customer_login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Customer Dashboard</title>
    <link rel="stylesheet" href="cart.css">
</head>
<body>
    <div class="customer-header">
        <h1>Welcome, Customer</h1>
        <a href="logout.php"><button class="action">Logout</button></a>
    </div>
    <div class="dashboard-content">
        <p>Browse menu, place orders, and view bills here.</p>
    </div>
</body>
</html>

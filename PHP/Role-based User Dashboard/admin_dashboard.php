<?php include 'connect.php'; ?>
<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="admin_module.css">
</head>
<body>
    <div class="admin-header">
        <h1>Welcome, Admin</h1>
        <a href="logout.php"><button class="action">Logout</button></a>
    </div>
    <div class="dashboard-content">
        <p>Here you can manage users, items, and reports.</p>
    </div>
</body>
</html>

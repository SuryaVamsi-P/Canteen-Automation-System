<?php
// bill_logic.php - Handles billing operations

include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $customerName = $_POST['customer_name'] ?? '';
    $items = $_POST['items'] ?? [];
    $totalAmount = $_POST['total_amount'] ?? 0;

    if (empty($customerName) || empty($items)) {
        echo "Missing billing information.";
        exit;
    }

    // Convert array to JSON for DB storage
    $items_json = json_encode($items);

    $stmt = $conn->prepare("INSERT INTO bills (customer_name, items, total_amount, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("ssd", $customerName, $items_json, $totalAmount);

    if ($stmt->execute()) {
        echo "Bill successfully saved!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
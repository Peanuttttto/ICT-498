<?php
require 'condb.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("SELECT * FROM customers");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
    
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>

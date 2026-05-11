<?php
/**
 * Database Connection Module
 * Standardized connection for Aureus Academy
 */

// Configuration - In production, these should be in environment variables
$host = 'localhost';
$port = '5432';
$dbname = 'aureus'; // Updated to match schema.sql
$user = 'postgres';
$password = ''; // Defaulting to empty as per db_connect.php, user might need to adjust

$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

try {
    $db = pg_connect($conn_string);
    if (!$db) {
        throw new Exception("Error de conexión a la base de datos.");
    }
} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    exit;
}

/**
 * Global Response Helper
 */
function sendResponse($status, $data = [], $message = "") {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => $status,
        'data' => $data,
        'message' => $message
    ]);
    exit;
}
?>

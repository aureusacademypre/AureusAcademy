<?php
// API Module: User Registration
require_once 'db_connect.php';

// Prevent direct access to non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse("error", [], "Método no permitido");
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
$nombre = $input['nombre'] ?? '';
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (empty($nombre) || empty($email) || empty($password)) {
    sendResponse("error", [], "Todos los campos son obligatorios");
}

// Hash the password for security
$password_hash = password_hash($password, PASSWORD_BCRYPT);

// Security: Use prepared statements with PostgreSQL to prevent SQL Injection
$query = "INSERT INTO usuarios (nombre, email, password_hash) VALUES ($1, $2, $3) RETURNING id";
$params = [$nombre, $email, $password_hash];

$result = pg_query_params($db, $query, $params);

if ($result) {
    $row = pg_fetch_assoc($result);
    sendResponse("success", ["id" => $row['id']], "Usuario registrado exitosamente");
} else {
    // Check if error is due to unique constraint (email already exists)
    $error = pg_last_error($db);
    if (strpos($error, 'duplicate key value') !== false) {
        sendResponse("error", [], "El correo electrónico ya está registrado");
    } else {
        sendResponse("error", [], "Error al registrar el usuario");
    }
}
?>

<?php
// API Module: Secure Login
require_once 'db_connect.php';

// Prevent direct access to non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse("error", [], "Método no permitido");
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (empty($email) || empty($password)) {
    sendResponse("error", [], "Credenciales incompletas");
}

// Security: Use prepared statements with PostgreSQL
$query = "SELECT id, nombre, rol, password_hash FROM usuarios WHERE email = $1";
$result = pg_query_params($db, $query, [$email]);

if (!$result) {
    sendResponse("error", [], "Error en la consulta");
}

$user = pg_fetch_assoc($result);

if ($user && password_verify($password, $user['password_hash'])) {
    // Session management could be added here
    sendResponse("success", [
        "id" => $user['id'],
        "nombre" => $user['nombre'],
        "rol" => $user['rol']
    ], "Autenticación exitosa");
} else {
    sendResponse("error", [], "Credenciales inválidas");
}
?>

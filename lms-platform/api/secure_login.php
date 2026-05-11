<?php
/**
 * Secure Login API
 * Implements prepared statements and password hashing verification
 */
require_once 'db.php';

session_start();

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse("error", [], "Método no permitido");
}

// Security: Check CSRF token (implementation placeholder)
// if (!isset($_SERVER['HTTP_X_CSRF_TOKEN']) || $_SERVER['HTTP_X_CSRF_TOKEN'] !== $_SESSION['csrf_token']) { ... }

$input = json_decode(file_get_contents('php://input'), true);
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$password = $input['password'] ?? '';

if (empty($email) || empty($password)) {
    sendResponse("error", [], "Por favor ingrese todos los campos");
}

// Robust SQL Query with Prepared Statements
$query = "SELECT id, nombre, rol, password_hash FROM usuarios WHERE email = $1";
$result = pg_query_params($db, $query, [$email]);

if (!$result) {
    sendResponse("error", [], "Error interno del servidor");
}

$user = pg_fetch_assoc($result);

if ($user && password_verify($password, $user['password_hash'])) {
    // Regenerate session ID to prevent fixation
    session_regenerate_id(true);
    
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_role'] = $user['rol'];
    $_SESSION['user_name'] = $user['nombre'];
    
    sendResponse("success", [
        "redirect" => ($user['rol'] === 'admin' ? '../admin/dashboard.html' : '../pages/dashboard.html')
    ], "Bienvenido de nuevo, " . $user['nombre']);
} else {
    // Security: Generic error message to prevent account enum
    sendResponse("error", [], "Credenciales no válidas");
}
?>

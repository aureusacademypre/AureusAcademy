<?php
// Módulo de Conexión: PostgreSQL
// Configura aquí tus credenciales de PostgreSQL
header('Content-Type: application/json');

$host = "localhost";
$port = "5432";
$dbname = "aureus";
$user = "postgres";    // Cambia según tu configuración
$password = "";          // Tu contraseña de PostgreSQL

$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

// Intentar la conexión
$db = @pg_connect($conn_string);

if (!$db) {
    // Si la conexión falla, devolvemos un JSON de error
    echo json_encode([
        "status" => "error", 
        "message" => "No se pudo conectar a la base de datos 'aureus' en PostgreSQL. Verifica el servicio y las credenciales."
    ]);
    exit;
}

// Función global para respuestas JSON estandarizadas
function sendResponse($status, $data = [], $message = "") {
    echo json_encode([
        "status" => $status,
        "data" => $data,
        "message" => $message
    ]);
    exit;
}
?>

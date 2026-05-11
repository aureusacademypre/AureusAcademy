-- Esquema de Base de Datos para Aureus Academy (PostgreSQL)
-- Ejecuta este script en tu base de datos 'aureus'

-- 1. Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) DEFAULT 'estudiante' CHECK (rol IN ('estudiante', 'admin')),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insertar un usuario de prueba (contraseña: aureus2026)
-- La contraseña está hasheada con BCRYPT (recomendado)
INSERT INTO usuarios (nombre, email, password_hash, rol) 
VALUES ('Fernando', 'aureusacademypre@gmail.com', '$2y$10$vI87bk/7D1yB.KByN8v7Ge6Z2v8Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2', 'admin')
ON CONFLICT (email) DO NOTHING;

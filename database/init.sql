-- database/init.sql

-- Crear tabla de mensajes
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(50),
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT FALSE,
    replied BOOLEAN DEFAULT FALSE,
    date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Índices para búsquedas rápidas
CREATE INDEX idx_messages_email ON messages(email);
CREATE INDEX idx_messages_date ON messages(date_sent DESC);
CREATE INDEX idx_messages_leido ON messages(read);

-- Crear tabla de logs (opcional, para auditoría)
CREATE TABLE IF NOT EXISTS message_logs (
    id SERIAL PRIMARY KEY,
    message_id INTEGER REFERENCES messages(id),
    action VARCHAR(50),
    done_by VARCHAR(100),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS videos;

CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration INTEGER NOT NULL
);

INSERT INTO videos (id, title, duration) VALUES
('uuid-123-abc', 'Primeiro Vídeo', 180),
('uuid-456-def', 'Segundo Vídeo', 240);
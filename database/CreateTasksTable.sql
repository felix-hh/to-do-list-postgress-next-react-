CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    task_title VARCHAR(64) NOT NULL,
    task_description VARCHAR(256),
    task_creation_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (task_id, task_title, task_description) VALUES (
    0, 'hello_world!', 'dummy_description'
);


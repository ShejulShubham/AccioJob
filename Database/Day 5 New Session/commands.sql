-- Website: https://aiven.io/tools/pg-playground

CREATE TABLE users (
    id serial,
    name text,
    email varchar(100), -- max length 100 characters
    role varchar(20) default 'user',
    created_at timestamp default now()
);

-- this is a comment, add two hyphones for comment


INSERT INTO users (name, email) values
('shubham', 'shejul@gmail.com'),
('vedant', 'vedant@gmail.com'),
('yogesh', 'yogesh@gmail.com'),
('saurabh', 'saurabh@gmail.com');

INSERT INTO users (email) values ('test@test.com');

UPDATE users SET name = 'test'
WHERE id = 5;

DELETE FROM users
WHERE name is NULL;

SELECT * FROM users;

ALTER TABLE users ADD COLUMN age INTEGER default 0;

UPDATE users SET age = 10
WHERE id = 6;

SELECT * FROM users
ORDER BY created_at desc;

SELECT * FROM users
WHERE age > 30;

SELECT * FROM users
WHERE name ilike '%s%';

SELECT * FROM users
WHERE age >= 20 AND role LIKE 'user';

SELECT * FROM users
WHERE age BETWEEN 20 AND 50;

SELECT * FROM users
WHERE age IN (29, 99);
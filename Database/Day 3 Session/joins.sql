create table users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	created_at DATETIME
);

create table orders (
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
    amount DECIMAL(10, 2),
	created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name) VALUES
('Rahul'),
('Aditi'),
('Aman');

INSERT INTO orders (user_id, amount) VALUES
(1, 500),
(1, 1200),
(2, 800);

SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;

SELECT users.name, orders.amount
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    amount INT,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO users (name, city) VALUES
('Rahul', 'Delhi'),
('Aditi', 'Mumbai'),
('Aman', 'Pune'),
('Neha', 'Delhi'),
('Rohit', 'Ahmedabad'),
('Pooja', 'Surat'),
('Karan', 'Vadodara'),
('Sneha', 'Jaipur'),
('Arjun', 'Indore'),
('Priya', 'Bhopal'),

('Vikas', 'Delhi'),
('Simran', 'Mumbai'),
('Ankit', 'Pune'),
('Riya', 'Delhi'),
('Sahil', 'Ahmedabad'),
('Meena', 'Surat'),
('Yash', 'Vadodara'),
('Kajal', 'Jaipur'),
('Nikhil', 'Indore'),
('Anjali', 'Bhopal'),

('Dev', 'Delhi'),
('Isha', 'Mumbai'),
('Harsh', 'Pune'),
('Komal', 'Delhi'),
('Parth', 'Ahmedabad'),
('Naina', 'Surat'),
('Jay', 'Vadodara'),
('Palak', 'Jaipur'),
('Mohit', 'Indore'),
('Chirag', 'Bhopal'),

('Manav', 'Delhi'),
('Tina', 'Mumbai'),
('Rakesh', 'Pune'),
('Bhavya', 'Delhi'),
('Kunal', 'Ahmedabad'),
('Payal', 'Surat'),
('Dhruv', 'Vadodara'),
('Reema', 'Jaipur'),
('Akash', 'Indore'),
('Sonali', 'Bhopal');


INSERT INTO orders (user_id, amount, order_date) VALUES
(1, 500, '2024-01-05'),
(1, 1200, '2024-01-10'),
(2, 800, '2024-01-08'),
(3, 1500, '2024-01-15'),
(4, 400, '2024-01-18'),

(5, 700, '2024-01-20'),
(6, 900, '2024-01-22'),
(7, 1100, '2024-01-25'),
(8, 600, '2024-01-28'),
(9, 1300, '2024-01-30'),

(10, 500, '2024-02-02'),
(11, 1400, '2024-02-05'),
(12, 750, '2024-02-07'),
(13, 1600, '2024-02-10'),
(14, 450, '2024-02-12'),

(15, 800, '2024-02-15'),
(16, 950, '2024-02-18'),
(17, 1200, '2024-02-20'),
(18, 700, '2024-02-22'),
(19, 1350, '2024-02-25'),

(20, 500, '2024-03-01'),
(21, 1450, '2024-03-03'),
(22, 850, '2024-03-05'),
(23, 1550, '2024-03-07'),
(24, 650, '2024-03-10'),

(25, 900, '2024-03-12'),
(26, 1000, '2024-03-15'),
(27, 1150, '2024-03-18'),
(28, 750, '2024-03-20'),
(29, 1400, '2024-03-22'),

(30, 600, '2024-03-25'),
(1, 1800, '2024-03-27'),
(2, 950, '2024-03-28'),
(3, 1250, '2024-03-29'),
(5, 700, '2024-03-30'),

(7, 1600, '2024-04-01'),
(9, 850, '2024-04-03'),
(11, 1300, '2024-04-05'),
(15, 900, '2024-04-07'),
(18, 1100, '2024-04-09');

SELECT users.name, orders.amount
FROM orders
LEFT JOIN users
ON users.id = orders.user_id;

SELECT users.name, users.city, orders.order_date
FROM orders
LEFT JOIN users
ON users.id = orders.user_id;

SELECT users.*, orders.*
FROM orders
INNER JOIN users
ON users.id = orders.user_id
WHERE users.city = "Delhi";
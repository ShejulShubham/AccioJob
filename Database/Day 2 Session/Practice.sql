select * from users
where email like "%@%.com";


-- 1
SELECT * FROM users
WHERE is_active = TRUE;

-- 2
SELECT * FROM employees
WHERE department = "Engineering" AND salary > 60000;

-- 3
SELECT * FROM users
WHERE email LIKE "%gmail%";

-- 4
SELECT * FROM products
WHERE price BETWEEN 500 AND 2000 AND is_available = TRUE;

-- UPDATE
UPDATE products
set stock_quantity = 100
WHERE id = 6;

-- 1
UPDATE users
SET is_active = FALSE
WHERE email = "sharma@gmail.com";

-- 2
UPDATE employees
SET salary = salary * 1.1
WHERE salary < 50000;

-- 3
DELETE FROM products
WHERE id = 22 AND is_available = FALSE;

-- 1
SELECT COUNT(*) FROM users;

SELECT COUNT(*) FROM users
WHERE is_active = TRUE;

-- 2
SELECT AVG(salary) AS average_salary, MAX(salary) as max_salary FROM employees;

-- 3
SELECT *, SUM(price * stock_quantity) AS TOTAL_STOCK FROM products;

CREATE TABLE orders (
id INT AUTO_INCREMENT PRIMARY KEY,
customer_name VARCHAR(100) NOT NULL,
product_name VARCHAR(100) NOT NULL,
category VARCHAR(50),
quantity INT NOT NULL,
price DECIMAL(10,2) NOT NULL,
order_status VARCHAR(20),
is_paid BOOLEAN DEFAULT false,
order_date DATE,
created_at DATETIME
);

INSERT INTO orders
(customer_name, product_name, category, quantity, price, order_status, is_paid, order_date, created_at)
VALUES
('Aarav Sharma','Laptop','Electronics',1,65000,'Delivered',true,'2024-01-01','2024-01-01 10:00:00'),
('Vivaan Patel','Mouse','Electronics',2,800,'Delivered',true,'2024-01-02','2024-01-02 11:00:00'),
('Aditya Verma','Keyboard','Electronics',1,2500,'Cancelled',false,'2024-01-03','2024-01-03 12:00:00'),
('Vihaan Mehta','Office Chair','Furniture',1,12000,'Delivered',true,'2024-01-04','2024-01-04 13:00:00'),
('Arjun Singh','Desk Lamp','Furniture',2,1500,'Pending',false,'2024-01-05','2024-01-05 14:00:00'),

('Sai Reddy','Mobile Phone','Electronics',1,22000,'Delivered',true,'2024-01-06','2024-01-06 10:30:00'),
('Krishna Iyer','Headphones','Electronics',1,3000,'Delivered',true,'2024-01-07','2024-01-07 11:30:00'),
('Rohan Das','Backpack','Accessories',1,1800,'Pending',false,'2024-01-08','2024-01-08 12:30:00'),
('Ananya Gupta','Notebook','Stationery',5,100,'Delivered',true,'2024-01-09','2024-01-09 13:30:00'),
('Ishita Jain','Pen Set','Stationery',3,250,'Delivered',true,'2024-01-10','2024-01-10 14:30:00'),

('Neha Kapoor','Water Bottle','Accessories',2,500,'Cancelled',false,'2024-01-11','2024-01-11 10:00:00'),
('Pooja Malhotra','Monitor','Electronics',1,14000,'Delivered',true,'2024-01-12','2024-01-12 11:00:00'),
('Rahul Khanna','Keyboard','Electronics',2,2600,'Delivered',true,'2024-01-13','2024-01-13 12:00:00'),
('Kunal Bansal','Laptop Stand','Accessories',1,1500,'Pending',false,'2024-01-14','2024-01-14 13:00:00'),
('Amit Mishra','Router','Electronics',1,3200,'Delivered',true,'2024-01-15','2024-01-15 14:00:00'),

('Suresh Yadav','Tablet','Electronics',1,18000,'Delivered',true,'2024-01-16','2024-01-16 10:15:00'),
('Nikhil Arora','Desk','Furniture',1,9000,'Delivered',true,'2024-01-17','2024-01-17 11:15:00'),
('Deepak Chauhan','Mouse Pad','Accessories',3,300,'Pending',false,'2024-01-18','2024-01-18 12:15:00'),
('Manish Pandey','Notebook','Stationery',10,90,'Delivered',true,'2024-01-19','2024-01-19 13:15:00'),
('Sanjay Roy','Printer','Electronics',1,11000,'Cancelled',false,'2024-01-20','2024-01-20 14:15:00'),

('Ritika Sen','Webcam','Electronics',1,4500,'Delivered',true,'2024-01-21','2024-01-21 10:00:00'),
('Sneha Kulkarni','Desk Organizer','Furniture',1,1200,'Delivered',true,'2024-01-22','2024-01-22 11:00:00'),
('Pankaj Tiwari','Chair','Furniture',2,6000,'Pending',false,'2024-01-23','2024-01-23 12:00:00'),
('Ashish Goyal','Smart Watch','Electronics',1,5500,'Delivered',true,'2024-01-24','2024-01-24 13:00:00'),
('Vikas Saxena','Calculator','Stationery',1,700,'Delivered',true,'2024-01-25','2024-01-25 14:00:00'),

('Mehul Shah','Power Bank','Electronics',1,2000,'Delivered',true,'2024-01-26','2024-01-26 10:30:00'),
('Hardik Joshi','Tablet Cover','Accessories',1,800,'Pending',false,'2024-01-27','2024-01-27 11:30:00'),
('Pranav Kulkarni','Keyboard','Electronics',1,2700,'Delivered',true,'2024-01-28','2024-01-28 12:30:00'),
('Alok Tripathi','Laptop','Electronics',1,70000,'Delivered',true,'2024-01-29','2024-01-29 13:30:00'),
('Shubham Agarwal','Pen Drive','Accessories',2,600,'Delivered',true,'2024-01-30','2024-01-30 14:30:00'),

('Ravi Prakash','Monitor','Electronics',1,13000,'Pending',false,'2024-02-01','2024-02-01 10:00:00'),
('Karthik Nair','Desk Lamp','Furniture',1,1600,'Delivered',true,'2024-02-02','2024-02-02 11:00:00'),
('Siddharth Rao','Notebook','Stationery',6,95,'Delivered',true,'2024-02-03','2024-02-03 12:00:00'),
('Varun Mallick','Mouse','Electronics',1,750,'Cancelled',false,'2024-02-04','2024-02-04 13:00:00'),
('Abhishek Soni','Laptop Stand','Accessories',1,1400,'Delivered',true,'2024-02-05','2024-02-05 14:00:00'),

('Mohit Chawla','Router','Electronics',1,3500,'Delivered',true,'2024-02-06','2024-02-06 10:30:00'),
('Tarun Bhatia','Desk','Furniture',1,9500,'Delivered',true,'2024-02-07','2024-02-07 11:30:00'),
('Naveen Khatri','Webcam','Electronics',1,4800,'Pending',false,'2024-02-08','2024-02-08 12:30:00'),
('Harsh Vardhan','Headphones','Electronics',1,3200,'Delivered',true,'2024-02-09','2024-02-09 13:30:00'),
('Yogesh Solanki','Office Chair','Furniture',1,12500,'Delivered',true,'2024-02-10','2024-02-10 14:30:00'),

('Aakash Tomar','Power Bank','Electronics',2,2100,'Delivered',true,'2024-02-11','2024-02-11 10:00:00'),
('Rohit Choudhary','Tablet','Electronics',1,19000,'Pending',false,'2024-02-12','2024-02-12 11:00:00'),
('Gaurav Bhatt','Printer','Electronics',1,11500,'Delivered',true,'2024-02-13','2024-02-13 12:00:00'),
('Sameer Sheikh','Desk Organizer','Furniture',2,1300,'Delivered',true,'2024-02-14','2024-02-14 13:00:00'),
('Imran Khan','Calculator','Stationery',1,750,'Delivered',true,'2024-02-15','2024-02-15 14:00:00');

-- 1
SELECT * FROM orders
WHERE is_paid = TRUE;

-- 2
SELECT * FROM orders
ORDER BY created_at DESC
LIMIT 5;

-- 3
SELECT * FROM orders
WHERE category = "Electronics";

-- 4
SELECT * FROM orders
WHERE quantity > 1;

-- 5
SELECT * FROM orders
WHERE price BETWEEN 1000 AND 5000;

-- 6
SELECT DISTINCT category FROM orders;

-- 7
SELECT * FROM orders
WHERE order_status = "Cancelled";

-- 8
SELECT customer_name , product_name, is_paid  FROM orders
WHERE is_paid = FALSE;

-- 9 Do not use LIKE
SELECT * FROM orders
WHERE order_date BETWEEN "2024-01-01" AND "2024-01-31";

-- 10
SELECT * FROM orders
ORDER BY price DESC;

-- 11
SELECT COUNT(*) FROM orders;

-- 12
SELECT COUNT(*) FROM orders
WHERE is_paid = TRUE;

-- 13
SELECT SUM(quantity * price) FROM orders;

-- 14
SELECT AVG(quantity * price) FROM orders;

-- 15
SELECT MAX(quantity * price) FROM orders;

-- 16
SELECT MIN(quantity * price) FROM orders;

-- 17
SELECT * FROM orders
WHERE category = "Furniture";

-- 18
SELECT * FROM orders
WHERE product_name LIKE "%Laptop%";

-- 19
SELECT * FROM orders
WHERE is_paid = FALSE
ORDER by created_at DESC;

-- 20
UPDATE orders
SET order_status = "Cancelled"
WHERE id = 5;

-- Assignments Attendance

-- 1
SELECT * FROM attendance
WHERE status = "Present";

-- 2
SELECT * FROM attendance
WHERE status = "Absent";

-- 3
SELECT COUNT(*) FROM attendance
WHERE course = "Web Development";

-- 4
SELECT * FROM attendance
WHERE is_late = TRUE;

-- 5
SELECT COUNT(*) FROM attendance
WHERE attendance_date = "2024-01-05";


-- 6
SELECT DISTINCT course FROM attendance;

-- 7
SELECT * FROM attendance
WHERE status = "Present" AND is_late = TRUE;

-- 8
SELECT student_name, course, status FROM attendance
WHERE status = "Absent";

-- 9
SELECT * FROM attendance
ORDER BY created_at DESC;

-- 10
SELECT * FROM attendance
LIMIT 5;

-- 11
SELECT COUNT(*) FROM attendance;

-- 12
SELECT COUNT(*) FROM attendance
WHERE status = "Present";

-- 13
SELECT COUNT(*) FROM attendance
WHERE status = "Absent";

-- 14
SELECT COUNT(*) FROM attendance
WHERE is_late = TRUE;

-- 15
SELECT COUNT(*) FROM attendance
WHERE course = "Python";

-- 16
SELECT * FROM attendance
WHERE attendance_date BETWEEN "2024-01-04" AND "2024-01-05";

-- 17
SELECT * FROM attendance
WHERE student_name LIKE "A%";

-- 18
SELECT * FROM attendance
WHERE status = "Present"
ORDER BY created_at DESC;

-- 19
SELECT * FROM attendance
WHERE course = "Web Development" OR course = "Python"
ORDER BY course;

-- 20
UPDATE attendance
SET status = "Absent", is_late = FALSE
WHERE student_name LIKE "Vivaan%";
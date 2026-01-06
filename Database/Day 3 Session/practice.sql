SELECT department, COUNT(*) 
FROM employees
GROUP BY department;

SELECT department, AVG(salary) AS avg_salary 
FROM employees
GROUP BY department;

SELECT department, SUM(salary) AS total_salary 
FROM employees
GROUP BY department;

SELECT department, COUNT(*) AS employees 
FROM employees
WHERE is_permanent = TRUE
GROUP BY department;

SELECT department, COUNT(*) AS employee_count 
FROM employees
WHERE is_permanent = TRUE
GROUP BY department
HAVING employee_count > 1
ORDER BY employee_count;


SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

SELECT is_active, COUNT(*) FROM users
GROUP BY is_active;

SELECT COUNT(*) FROM users
WHERE is_active = TRUE;

SELECT DATE(created_at), COUNT(*) AS users_created FROM users
GROUP BY DATE(created_at);

SELECT DATE(created_at) AS signup_dates, COUNT(*) AS users FROM users
GROUP BY DATE(created_at)
HAVING users > 1;

SELECT email LIKE "%gmail.com" AS is_gmail, COUNT(*) AS users_count 
FROM users
GROUP BY is_gmail;

SELECT department, COUNT(*) AS employees
FROM employees
GROUP BY department;

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 60000;

SELECT is_permanent, COUNT(*) AS employees
FROM employees
GROUP BY is_permanent;

SELECT department, COUNT(*) AS employees
FROM employees
WHERE is_permanent = TRUE
GROUP BY department;

SELECT department, COUNT(*) AS employees
FROM employees
GROUP BY department
HAVING employees > 2;

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

SELECT is_available, COUNT(*) AS products
FROM products
GROUP BY is_available;

SELECT is_available, SUM(price*stock_quantity) AS total_price
FROM products
GROUP BY is_available;

SELECT is_available, SUM(price*stock_quantity) AS total_price
FROM products
GROUP BY is_available
HAVING total_price > 10000;


SELECT DATE(created_at), COUNT(*) AS products
FROM products
GROUP BY DATE(created_at);

CREATE TABLE students (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
course VARCHAR(100) NOT NULL,
admission_date DATE NOT NULL,
is_active BOOLEAN DEFAULT TRUE
);

INSERT INTO students (name, email, course, admission_date, is_active) VALUES
('Aarav Sharma', 'aarav.sharma@student.com', 'Web Development', '2023-01-10', true),
('Vivaan Patel', 'vivaan.patel@student.com', 'Data Science', '2023-01-15', true),
('Aditya Verma', 'aditya.verma@student.com', 'Web Development', '2023-01-20', false),
('Vihaan Mehta', 'vihaan.mehta@student.com', 'Python Programming', '2023-02-01', true),
('Arjun Singh', 'arjun.singh@student.com', 'Data Analytics', '2023-02-05', true),

('Sai Reddy', 'sai.reddy@student.com', 'Web Development', '2023-02-10', true),
('Krishna Iyer', 'krishna.iyer@student.com', 'Machine Learning', '2023-02-15', false),
('Rohan Das', 'rohan.das@student.com', 'Python Programming', '2023-02-20', true),
('Ananya Gupta', 'ananya.gupta@student.com', 'Web Development', '2023-03-01', true),
('Ishita Jain', 'ishita.jain@student.com', 'Data Science', '2023-03-05', true),

('Neha Kapoor', 'neha.kapoor@student.com', 'Digital Marketing', '2023-03-10', false),
('Pooja Malhotra', 'pooja.malhotra@student.com', 'Web Development', '2023-03-15', true),
('Rahul Khanna', 'rahul.khanna@student.com', 'Data Analytics', '2023-03-20', true),
('Kunal Bansal', 'kunal.bansal@student.com', 'Python Programming', '2023-04-01', true),
('Amit Mishra', 'amit.mishra@student.com', 'Machine Learning', '2023-04-05', false),

('Suresh Yadav', 'suresh.yadav@student.com', 'Web Development', '2023-04-10', true),
('Nikhil Arora', 'nikhil.arora@student.com', 'Data Science', '2023-04-15', true),
('Deepak Chauhan', 'deepak.chauhan@student.com', 'Python Programming', '2023-04-20', true),
('Manish Pandey', 'manish.pandey@student.com', 'Digital Marketing', '2023-05-01', false),
('Sanjay Roy', 'sanjay.roy@student.com', 'Web Development', '2023-05-05', true),

('Ritika Sen', 'ritika.sen@student.com', 'Data Analytics', '2023-05-10', true),
('Sneha Kulkarni', 'sneha.kulkarni@student.com', 'Python Programming', '2023-05-15', true),
('Pankaj Tiwari', 'pankaj.tiwari@student.com', 'Web Development', '2023-05-20', false),
('Ashish Goyal', 'ashish.goyal@student.com', 'Machine Learning', '2023-06-01', true),
('Vikas Saxena', 'vikas.saxena@student.com', 'Data Science', '2023-06-05', true),

('Mehul Shah', 'mehul.shah@student.com', 'Web Development', '2023-06-10', true),
('Hardik Joshi', 'hardik.joshi@student.com', 'Digital Marketing', '2023-06-15', false),
('Pranav Kulkarni', 'pranav.kulkarni@student.com', 'Python Programming', '2023-06-20', true),
('Alok Tripathi', 'alok.tripathi@student.com', 'Data Analytics', '2023-07-01', true),
('Shubham Agarwal', 'shubham.agarwal@student.com', 'Web Development', '2023-07-05', true),

('Ravi Prakash', 'ravi.prakash@student.com', 'Machine Learning', '2023-07-10', false),
('Karthik Nair', 'karthik.nair@student.com', 'Data Science', '2023-07-15', true),
('Siddharth Rao', 'siddharth.rao@student.com', 'Web Development', '2023-07-20', true),
('Varun Mallick', 'varun.mallick@student.com', 'Python Programming', '2023-08-01', true),
('Abhishek Soni', 'abhishek.soni@student.com', 'Digital Marketing', '2023-08-05', false),

('Mohit Chawla', 'mohit.chawla@student.com', 'Web Development', '2023-08-10', true),
('Tarun Bhatia', 'tarun.bhatia@student.com', 'Data Analytics', '2023-08-15', true),
('Naveen Khatri', 'naveen.khatri@student.com', 'Python Programming', '2023-08-20', true),
('Harsh Vardhan', 'harsh.vardhan@student.com', 'Machine Learning', '2023-09-01', false),
('Yogesh Solanki', 'yogesh.solanki@student.com', 'Web Development', '2023-09-05', true),

('Aakash Tomar', 'aakash.tomar@student.com', 'Data Science', '2023-09-10', true),
('Rohit Choudhary', 'rohit.choudhary@student.com', 'Web Development', '2023-09-15', true),
('Gaurav Bhatt', 'gaurav.bhatt@student.com', 'Digital Marketing', '2023-09-20', false),
('Sameer Sheikh', 'sameer.sheikh@student.com', 'Python Programming', '2023-10-01', true),
('Imran Khan', 'imran.khan@student.com', 'Data Analytics', '2023-10-05', true);


SELECT course, COUNT(*) AS students
FROM students
GROUP BY course;

SELECT course, COUNT(*) AS students
FROM students
WHERE is_active = TRUE
GROUP BY course;

SELECT course, COUNT(*) AS students
FROM students
GROUP BY course
HAVING students > 3;

SELECT course, COUNT(*) AS students
FROM students
GROUP BY course
HAVING students > 3
ORDER BY students DESC;
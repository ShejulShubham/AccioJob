SELECT age FROM users
WHERE age > 18;

--Sub Queries

SELECT * FROM users
WHERE age in (SELECT age FROM users
WHERE age > 18);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK(age >= 1 AND age <= 80),
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'manager')),
    created_at TIMESTAMP DEFAULT now()
);


INSERT INTO users (name, email, age) VALUES ('shejul', 'shejul@gmail.com', 1,);

INSERT INTO users (name, email, age, role) VALUES ('shejul', 'shejul1@gmail.com', 1, 'admin');

 INSERT INTO users (name, email, age) VALUES ('pranav', 'pranav@gmail.com', 55);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    class_name VARCHAR(20)
);

CREATE TABLE marks (
    mark_id INT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(30),
    score INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);


INSERT INTO students VALUES 
(1, 'shubham', '10A'),
(2, 'suyog', '10A'),
(3, 'yogesh', '10A'),
(4, 'vedant', '10B'),
(6, 'meera', '10B'),
(5, 'pranav', '10B');


INSERT INTO marks VALUES 
(1, 1, 'math', 92),
(2, 1, 'science', 80),
(3, 2, 'math', 72),
(4, 3, 'math', 52),
(5, 4, 'math', 82),
(6, 5, 'math', 32);

SELECT 
    students.student_name,
    marks.subject,
    marks.score
FROM
    students INNER JOIN marks
ON
    students.student_id = marks.student_id;

--- 

SELECT 
    s.student_name,
    m.subject,
    m.score
FROM
    students s INNER JOIN marks m
ON
    s.student_id = m.student_id;

--- 

SELECT 
    s.student_name,
    m.subject,
    m.score
FROM
    students s LEFT JOIN marks m
ON
    s.student_id = m.student_id;

--- 

SELECT 
    s.student_name,
    s.class_name,
    m.subject,
    m.score
FROM
    students s FULL JOIN marks m
ON
    s.student_id = m.student_id;

---

SELECT COUNT(*) FROM students;

SELECT SUM(score) FROM marks;

SELECT AVG(score) FROM marks;

SELECT 
    student_id,
    COUNT(*) as count_marks,
    AVG(score) as avg_score
FROM
    marks
GROUP BY 
    student_id;

---

SELECT 
    student_id,
    COUNT(*) as count_marks,
    AVG(score) as avg_score
FROM
    marks
GROUP BY 
    student_id
HAVING
    AVG(score) >= 80;

---

CREATE TABLE people
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    age INT,
    city VARCHAR(20),
    marks INT
);

INSERT INTO people (name, age, city, marks) VALUES
('rahul', 21, 'pune', 85),
('amit', 20, 'mumbai', 72),
('priya', 22, 'delhi', 90),
('neha', 21, 'pune', 67),
('sam', 23, 'mumbai', 95)
('Ramit', 25, 'pune', 80);

-- 1. display all records
SELECT * FROM people;

-- 2. display only names
SELECT name FROM people;

-- 3. display name and city
SELECT name, city FROM people;

--- 4. display students from pune
SELECT * FROM people
WHERE city = 'pune';

--- 5. marks greater than 80
SELECT * FROM people
WHERE marks > 80;

--- 6. sort by marks
SELECT * FROM people
ORDER BY marks;

--- 7. highest marks first 
SELECT * FROM people
ORDER BY marks DESC;

--- 8. count total students
SELECT COUNT(*) FROM people;

--- 9. average marks
SELECT AVG(marks) FROM people;

--- 10. students from mumbai and marks greater than 70
SELECT * FROM people
WHERE city = 'mumbai' AND marks > 70;

--- 11. students whose name starts with r or R
SELECT * FROM people
WHERE name LIKE 'r%' OR name LIKE 'R%';

--- 12. students whose in pune or mumbai
SELECT * FROM people
WHERE city IN ('pune', 'mumbai');

--- 13. count students city wise
SELECT city, COUNT(*) as students FROM people
GROUP BY city;

--- 14. cities having more than 1 student
SELECT city, COUNT(*) as students FROM people
GROUP BY city
HAVING COUNT(*) > 1;
create table users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(150) UNIQUE,
	password VARCHAR(255) NOT NULL,
	is_active BOOLEAN DEFAULT true,
	created_at DATETIME
);


create table employees (
	id INT AUTO_INCREMENT PRIMARY KEY,
	full_name VARCHAR(120) NOT NULL,
	department VARCHAR(50),
	salary DECIMAL(10, 2),
	joining_date DATE,
	is_permanent BOOLEAN DEFAULT false
);

create table products (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	price DECIMAL,
	stock_quantity INT,
	is_available BOOLEAN,
	created_at DATETIME
);

insert into users (name, email, password, created_at) values ("shubham shejul", "shejul@gmail.com", 12345, now());

insert into users (name, email, password, created_at) values ("neha sharma", "sharma@gmail.com", 123, now());

	insert into employees (full_name, department, salary, joining_date) values ("shubham shejul", "civil", 1000, now());
	
insert into employees (full_name, department, salary, joining_date) values ("neha bhatia", "computer science", 10001, now());

insert into products (name, price, stock_quantity, is_available, created_at) values ("pen", 500, 5, TRUE, now());

insert into products (name, price, stock_quantity, is_available, created_at) values ("mobile", 1500, 51, FALSE, now());


select name, email from users;

select full_name, salary, (salary * 12) as annual_salary from employees;

select * from users order by created_at limit 3;

select distinct course from students;

select * from users
where is_active = TRUE;

select * from users where name LIKE "A%";
DROP DATABASE IF EXISTS employee_db;
Create  DATABASE employee_db;

USE employee_db;

Create TABLE deparment (
    id INT NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

Create TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(10,3) NOT NULL,
    department_id INT,
    PRIMARY key(id)
);

Create TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY key(id),
);



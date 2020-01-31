DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;
USE employee_trackerdb;

--Department
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    deptartment_name VARCHAR (30) NOT NULL,
    PRIMARY KEY(id)
);

--Role
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary INT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

--Employee
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
	PRIMARY KEY(id)
)
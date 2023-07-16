USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Human Resourcing");

INSERT INTO role (title, salary, department_id)
VALUES ("Art Director", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Representative", 40000, 1;
INSERT INTO role (title, salary, department_id)
VALUES ("Graphic Designer", 80000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 110000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Associate", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Griffon", "Dean", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Isabella", "Davidson", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daniel", "Smith", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Adams", 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jacob", "Call", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lee", "Carol", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Lynch", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Richard", "Sarlund", 1, 2);
INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("William", "Garcia", 1, null),
       ("Ethan", "Nguyen", 2, 1),
       ("Emma", "Flores", 3, null),
       ("Aiden", "Chen", 4, 3),
       ("Aarav", "Patel", 5, null),
       ("Sophia", "Scott", 6, 5),
       ("Olivia", "Mendoza", 7, null),
       ("Noah", "Wang", 8, 7);





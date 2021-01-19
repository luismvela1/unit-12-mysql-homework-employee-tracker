USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title,salary,department_id)
VALUES ("Sales Associates",25000,7);
INSERT INTO role (title,salary,department_id)
VALUES ("Lead Sales",35000,7);
INSERT INTO role (title,salary,department_id)
VALUES ("Lead Engineer",120000,1);
INSERT INTO role (title,salary,department_id)
VALUES ("Electrical Egineer",150000,1);
INSERT INTO role (title,salary,department_id)
VALUES ("Staff Accountant",50000,2);
INSERT INTO role (title,salary,department_id)
VALUES ("financial Analyst",75000,2);
INSERT INTO role (title,salary,department_id)
VALUES ("Paralegal",65000,4);
INSERT INTO role (title,salary,department_id)
VALUES ("lawyer",190000,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Elizabeth","Fey",1,10);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Paul","Hewson",2,9);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Mark","Sinclair",3,NULL);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Jhon","Stephens",4,7);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Peter","Hernandez",5,8);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Terry","Bollea",6,NULL);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Tara","Patrick",7,6);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Ramon","Estevez",8,NULL);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Eric","Bishop",9,NULL);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Jonah","Feldstein",10,1);




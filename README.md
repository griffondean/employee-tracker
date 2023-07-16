# employee-tracker

## User Story

As a buisiness owner I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business.

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Tech Used
- inquirer
- mySQL
- console.table
- Javascript
- Node.js

## Installation

## Installation

- Use the follow command at your terminal, **git clone** (Create a working copy at your local repository):

  ```
  git clone git@github.com:griffondean/employee-tracker.git
  ```

- After cloned the repository, create your own repository, copy the files to your repository and type in your terminal the follow commands.

  ```
  git status

  git add -A

  git commit -m "Message to commit."

  git push or git push origin main
  ```

  - Npm install all required dependencies

  ## Usage
1. install npm init -y to create a new .json file
2. npm install
3. npm install inquirer
4. npm install mysql
5. npm install console.table
6. make sure to run .sql file in mySQL workbench before running server.js so that tables are able to render correctly
7. run node server.js
8. make sure server.js is connected to SQL before continuing
9. run through prompts as required 
# Payroll-Management-System

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
```bash
git clone https://github.com/shvmsh20/Payroll-Management-System
cd Payroll-Management-System
```

## Requirements

- Any operating system (i.e. Linux, Windows, MacOS X)
- A little knowledge of React and Node.js 

## Agile Documentation

## Development Setup

- Install node, npm.

## To start FrontEnd React Server
```bash
cd Payroll-Management-System/payroll-frontend
npm i
npm start
```

## To start Backend Server
```bash
cd Payroll-Management-System/backend
npm i
nodemon index.js
```

- create a role called **me** and give it a password of **password**. A role can function as a user or a group , so in this case, we’ll be using it as a user.
- We want **me** to be able to create a database.So run the following :-
 ```bash
 ALTER ROLE me CREATEDB ;
 ```
 - After that create a database named api
 ```bash
 CREATE DATABASE api ;
 ```
- For connecting postgres with **me**.Run :
```bash
psql -d postgres -h localhost -U me
```

## To Create Tables

- Run the sql commands mentioned in backend/commands/DDL.sql file.

## Authors

- **Shivam Sharma**
- **Shubh Chaurasia**
- **Suwali Arora**


/*
Run this on your command line to interact with the PostgreSQL command line tool

psql -U yourusername

By default, the username is 'postgres' and the databases run in http://localhost:5432

Then:
Run \l to explore existing databases
Use the command in this file to create a new database
Use \c to_do_list to connect to the database named to_do_list using the 'postgres' role

Create a new user for this database only to follow the principle of least privilege
Use psql -U demo_to_do_list_user demo_to_do_list to connect to the demo_to_do_list database
directly using the newly created user. 

Use \? to view more commands inside psql

*/

CREATE DATABASE demo_to_do_list;

CREATE USER demo_to_do_list_user WITH PASSWORD '1234';
GRANT ALL PRIVILEGES ON DATABASE demo_to_do_list TO demo_to_do_list_user;
ALTER ROLE demo_to_do_list_user WITH LOGIN;

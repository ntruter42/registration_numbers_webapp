CREATE TABLE test.towns (
	town_code VARCHAR(3) PRIMARY KEY NOT NULL,
	town_name VARCHAR(32) NOT NULL
);

CREATE TABLE development.towns (
	town_code VARCHAR(3) PRIMARY KEY NOT NULL,
	town_name VARCHAR(32) NOT NULL
);

CREATE TABLE production.towns (
	town_code VARCHAR(3) PRIMARY KEY NOT NULL,
	town_name VARCHAR(32) NOT NULL
);



CREATE TABLE test.registration_numbers (
	reg_num VARCHAR(10) PRIMARY KEY NOT NULL,
	town_code VARCHAR(3) NOT NULL REFERENCES test.towns(town_code)
);

CREATE TABLE development.registration_numbers (
	reg_num VARCHAR(10) PRIMARY KEY NOT NULL,
	town_code VARCHAR(3) NOT NULL REFERENCES development.towns(town_code)
);

CREATE TABLE production.registration_numbers (
	reg_num VARCHAR(10) PRIMARY KEY NOT NULL,
	town_code VARCHAR(3) NOT NULL REFERENCES production.towns(town_code)
);



TRUNCATE TABLE development.registration_numbers;
TRUNCATE TABLE production.registration_numbers;
TRUNCATE TABLE test.registration_numbers;

TRUNCATE TABLE development.towns;
TRUNCATE TABLE production.towns;
TRUNCATE TABLE test.towns;



DROP TABLE development.registration_numbers;
DROP TABLE production.registration_numbers;
DROP TABLE test.registration_numbers;

DROP TABLE development.towns;
DROP TABLE production.towns;
DROP TABLE test.towns;
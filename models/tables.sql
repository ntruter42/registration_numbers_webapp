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

--------------------------------------------------------------------------------

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
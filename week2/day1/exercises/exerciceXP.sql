CREATE TABLE IF NOT EXISTS items(
	items_id SERIAL PRIMARY KEY,
	size_items VARCHAR(100) NOT NULL,
	price_items integer NOT NULL
);

CREATE TABLE IF NOT EXISTS customers(
	id_customer serial primary key,
	first_name varchar(100) not null,
	last_name varchar(100) not null
);

INSERT INTO items(size_items,price_items)
VALUES 
	('Small Desk',100),
	('Large desk',300),
	('Fan',80);

INSERT INTO customers(first_name,last_name)
VALUES
	('Greg ','Jones'),
	('Sandra ','Jones'),
	('Scott','Scott'),
	('Trevor ','Green'),
	('Melanie ','Johnson');

SELECT * FROM items;
SELECT * FROM items WHERE price_items>80;
SELECT * FROM customers WHERE last_name='Smith';
SELECT * FROM customers WHERE last_name='Jones';
SELECT * FROM customers WHERE last_name!='Scott'
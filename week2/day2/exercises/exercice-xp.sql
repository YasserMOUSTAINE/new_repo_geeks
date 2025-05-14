select * from customer;

select first_name,last_name from customer as full_name;

select distinct create_date from customer;

select * from customer order by first_name asc;

select film_id,title,description,release_year,rental_rate from film order by rental_rate asc;

select address,phone from address where district='Texas';

select * from film where film_id= 15 or film_id= 100;

select film_id, title, description,length,rental_rate from film where title='Airport Pollock';

select film_id, title, description,length,rental_rate from film where title like '%Ai%';

select * from film where film_id between 0 and 10 order by replacement_cost asc;

select * from film order by replacement_cost asc limit 10;

select customer.customer_id,customer.first_name,customer.last_name,payment.amount,payment.payment_date from customer 
inner join payment 
on customer.customer_id=payment.customer_id order by customer.customer_id asc;

select film.film_id, film.title,inventory from film left outer join inventory
on film.film_id=inventory.film_id where inventory.film_id = null;

select country.country,city.country_id,city.city from country
right outer join city
on country.country_id=city.country_id
order by country.country;

select customer.customer_id,customer.first_name,customer.last_name,payment.payment_id,payment.amount from customer
inner join payment
on customer.customer_id=payment.customer_id
order by payment.staff_id asc;
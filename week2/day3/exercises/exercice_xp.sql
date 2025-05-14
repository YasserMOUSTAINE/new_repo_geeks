select * from language;

select film.title,film.description,language.name from film 
inner join language
on film.language_id= language.language_id;

select film.title,film.description,language.name from language 
left outer join film
on film.language_id= language.language_id;



select film.film_id,film.title,film.description,language.language_id,language.name from language 
left outer join film
on film.language_id= language.language_id;

update film
set language_id=3 where film_id=133;
select rental_duration from film;

select count(*) from rental where return_date is null;

select film.film_id,film.title,film.replacement_cost,inventory.inventory_id,rental.return_date
from film 
inner join inventory
on film.film_id=inventory.film_id
inner join rental 
on rental.inventory_id=inventory.inventory_id
where rental.return_date is null
order by film.replacement_cost desc limit 30;

CREATE OR REPLACE FUNCTION get_movies_by_actor_and_keyword(
    first_name_input VARCHAR,
    last_name_input VARCHAR,
    keyword_input VARCHAR
)
RETURNS TABLE(
    title VARCHAR,
    actor_first_name VARCHAR,
    actor_last_name VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT f.title, a.first_name, a.last_name
    FROM film f
    INNER JOIN film_actor fa ON f.film_id = fa.film_id
    INNER JOIN actor a ON fa.actor_id = a.actor_id
    WHERE a.first_name = first_name_input
      AND a.last_name = last_name_input
      AND f.description ILIKE '%' || keyword_input || '%';
END;
$$ LANGUAGE plpgsql;
/*SELECT * FROM get_movies_by_actor_and_keyword('Penelope', 'Monroe', 'sumo');*/
select rating from film order by length asc;

create or replace function find_by_category_lenght_rate(cat varchar(100),len int,rate varchar(50))
	returns table(title_film varchar(100))
		AS $$
		begin
		return query
			select film.title from film
			inner join film_category
			on film.film_id=film_category.film_id
			inner join category 
			on film_category.category_id=category.category_id
			where film.rating= rate::mpaa_rating and category.name=cat and film.length< len;
		end
$$ LANGUAGE plpgsql;
/*SELECT * FROM find_by_category_lenght_rate('Documentary', 60, 'R');*/
select film.title,film.replacement_cost,customer.first_name,customer.last_name,rental.return_date from film
inner join inventory
on film.film_id=inventory.film_id
inner join rental
on inventory.inventory_id=rental.inventory_id
inner join customer
on customer.customer_id=rental.customer_id
where customer.first_name = 'Matthew' and customer.last_name='Mahan' and film.replacement_cost>4 and rental.return_date between '2005-07-28 00:00:00' and '2005-08-01 23:59:59';

SELECT f.title, f.description, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.customer_id = (
    SELECT customer_id FROM customer
    WHERE first_name = 'Matthew' AND last_name = 'Mahan'
)
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
